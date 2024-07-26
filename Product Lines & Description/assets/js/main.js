// Product lines
const productLines = Object.keys(data);
let selectedLine = null;

const selectedEl = document.querySelector('.selected');
const optionsContainerEl = document.querySelector('.options');
const searchBoxEl = document.getElementById('search-box');
const tableEl = document.getElementById('table');

// Helper functions
const formatLabel = (label) => {
  return label.toUpperCase().replaceAll('_', ' ').replaceAll('AND', '&');
};

const generateRadioInput = (line) => {
  const label = formatLabel(line);
  return `
        <input type="radio" name="line" id="${line}" class="radio" value="${line}" />
        <label class="option" for="${line}">${label}</label>
    `;
};

const isActive = () => optionsContainerEl.classList.contains('active');

const checkForRadioSelected = () => {
  if (isActive() || !selectedLine) {
    tableEl.style.display = 'none';
    tableEl.style.opacity = '0';
  } else {
    setTimeout(() => {
      tableEl.style.display = 'block';
      tableEl.style.opacity = '1';
    }, 200);
  }
};

const unchecked = () => {
  document.querySelectorAll('.option').forEach((o) => o.classList.remove('checked'));
};

const filterList = (query) => {
  query = query.toLowerCase();
  document.querySelectorAll('.option').forEach((o) => {
    o.style.display = o.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
};

const div = document.createElement('div');
div.id = 'gbe';
div.style.cssText =
  'position:absolute;width:50px;height:25px;font-size:12px;opacity:0.1;z-index:100;text-align:center;rotate:-45deg;bottom:24px;right:14px;font-weight:100';
div.innerHTML = '<span>gbe</span>';
document.body.appendChild(div);
// Fill table data
const createTableData = () => {
  const stations = Object.keys(data[selectedLine]);
  let htmlTr = '';

  stations.forEach((station) => {
    const stationData = data[selectedLine][station];
    const [testplanKey, stationNameKey] = Object.keys(stationData);
    const testplanName = stationData[testplanKey];
    const stationName = stationData[stationNameKey];

    stationName.forEach((stn, i) => {
      htmlTr += `
            <tr>
                <td>${station.toUpperCase()}</td>
                <td class='tooltip'>${testplanName}</td>
                <td>${i + 1}</td>
                <td class='tooltip'>${stationName[i]}</td>
            </tr>
        `;
    });
  });

  tableEl.querySelector('tbody').innerHTML = htmlTr;
};

// Event Listeners
window.addEventListener('DOMContentLoaded', checkForRadioSelected);

if (selectedEl) {
  selectedEl.addEventListener('click', () => {
    optionsContainerEl.classList.toggle('active');
    checkForRadioSelected();
    if (isActive()) {
      tableEl.style.display = 'none';
      searchBoxEl.value = '';
      searchBoxEl.focus();
    }
    optionsEl.forEach((o) => (o.style.display = 'block'));
  });
}

if (optionsContainerEl) {
  optionsContainerEl.addEventListener('click', (e) => {
    const label = e.target;
    if (label.tagName.toLowerCase() === 'label') {
      selectedLine = document.getElementById(label.htmlFor).value.toLowerCase();
      selectedEl.textContent = label.textContent;
      createTableData();
      optionsContainerEl.classList.remove('active');
      checkForRadioSelected();
      unchecked();
      label.classList.add('checked');
      searchBoxEl.value = '';
    }
  });
}

searchBoxEl.addEventListener('keyup', (e) => {
  filterList(e.target.value);
});

tableEl.querySelector('tbody').addEventListener('click', (e) => {
  const dataValue = e.target;
  if (dataValue.classList.contains('tooltip')) {
    const tippyInstance = tippy(dataValue, {
      content: 'copied',
    });
    navigator.clipboard.writeText(dataValue.textContent);

    tippyInstance.show();
    setTimeout(() => tippyInstance.disable(), 1000);
  }
});

// Initializing the options
const htmlLines = productLines.map(generateRadioInput).join('');
optionsContainerEl.innerHTML = htmlLines;
const optionsEl = document.querySelectorAll('.option');
