// Product lines
const productLines = Object.keys(stationsData);
let selectedLine = null;

const selectedEl = document.querySelector(".selected");
const optionsContainerEl = document.querySelector(".options");
const searchBoxEl = document.getElementById("search-box");
const tableEl = document.querySelector(".table__container");
const tablesEls = tableEl.querySelectorAll(".table");
const tableSwitch = document.getElementById("table__switch");
const selectionEl = document.querySelector(".selection");
const stationTableEl = document.getElementById("station__table");
const materialTableEl = document.getElementById("material__table");

// Helper functions
const formatLabel = (label) => {
  return label.toUpperCase().replaceAll("_", " ").replaceAll("AND", "&");
};

const generateRadioInput = (line) => {
  const label = formatLabel(line);
  return `
        <input type="radio" name="line" id="${line}" class="radio" value="${line}" />
        <label class="option" for="${line}">${label}</label>
    `;
};

const isActive = () => optionsContainerEl.classList.contains("active");

const checkForRadioSelected = () => {
  if (isActive() || !selectedLine) {
    tableEl.classList.remove("show");
    selectionEl.classList.remove("show");
  } else {
    setTimeout(() => {
      tableEl.classList.add("show");
      selectionEl.classList.add("show");
    }, 200);
  }
};

const unchecked = () => {
  document
    .querySelectorAll(".option")
    .forEach((o) => o.classList.remove("checked"));
};

const filterList = (query) => {
  query = query.toLowerCase();
  document.querySelectorAll(".option").forEach((o) => {
    o.style.display = o.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
};

// Fill table data
const createTableData = () => {
  const stations = Object.keys(stationsData[selectedLine]);
  let htmlStation = "";
  let htmlMaterial = "";

  stations.forEach((station) => {
    const stationNames = stationsData[selectedLine][station];

    stationNames.forEach((stn, i) => {
      htmlStation += `
            <tr>
                <td>${formatLabel(station)}</td>
                <td>${i + 1}</td>
                <td class='tooltip'>${stationNames[i]}</td>
            </tr>
        `;
    });
  });

  stationTableEl.querySelector("tbody").innerHTML = htmlStation;

  materialsPerLine[selectedLine]?.sort().forEach((mat) => {
    const desc = materialDescription[mat.substring(0, 9)];
    htmlMaterial += `
            <tr>
                <td class='tooltip'>${mat}</td>
                <td>${desc}</td>
            </tr>
    `;
  });

  materialTableEl.querySelector("tbody").innerHTML = htmlMaterial;
};

// Event Listeners
window.addEventListener("DOMContentLoaded", checkForRadioSelected);

if (selectedEl) {
  selectedEl.addEventListener("click", () => {
    optionsContainerEl.classList.toggle("active");
    checkForRadioSelected();
    if (isActive()) {
      tableEl.classList.remove("show");
      searchBoxEl.value = "";
      searchBoxEl.focus();
    }
    optionsEl.forEach((o) => (o.style.display = "block"));
  });
}

if (optionsContainerEl) {
  optionsContainerEl.addEventListener("click", (e) => {
    const label = e.target;
    if (label.tagName.toLowerCase() === "label") {
      selectedLine = document.getElementById(label.htmlFor).value.toLowerCase();
      selectedEl.textContent = label.textContent;
      createTableData();
      optionsContainerEl.classList.remove("active");
      checkForRadioSelected();
      unchecked();
      label.classList.add("checked");
      searchBoxEl.value = "";
    }
  });
}

searchBoxEl.addEventListener("keyup", (e) => {
  filterList(e.target.value);
});

tableEl.addEventListener("click", (e) => {
  const dataValue = e.target;
  if (dataValue.classList.contains("tooltip")) {
    const tippyInstance = tippy(dataValue, {
      content: "copied",
    });
    navigator.clipboard.writeText(dataValue.textContent);

    tippyInstance.show();
    setTimeout(() => tippyInstance.disable(), 1000);
  }
});

// Initializing the options
const htmlLines = productLines.sort().map(generateRadioInput).join("");
optionsContainerEl.innerHTML = htmlLines;
const optionsEl = document.querySelectorAll(".option");

tableSwitch.addEventListener("change", () => {
  tableSwitch.checked
    ? tablesEls.forEach((t) => t.classList.add("transX"))
    : tablesEls.forEach((t) => t.classList.remove("transX"));
});
