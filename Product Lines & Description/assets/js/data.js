const stationsData = {
  // FORD BCM
  ford_bcm: {
    ict: ["BBS50110_L01S01"],
    flash: ["BBS50120_L01S01"],
    coating_top: ["BBS50130_L01S01"],
    aoi_top: ["BBS50140_L01S01"],
    coating_bottom: ["BBS50150_L01S01"],
    aoi_bottom: ["BBS50160_L01S01"],
    pin_insertion: ["BBS50170_L01S01"],
    milling: ["BBS50180_L01S01"],
    housing_assembly: ["BBS50190_L01S01"],
    housing_clip_check: ["BBS50200_L01S01"],
    eol: [
      "BBS50210_L01S01",
      "BBS50210_L01S02",
      "BBS50210_L01S03",
      "BBS50210_L01S04",
    ],
    bracket_assembly: ["BBS50220_L01S01"],
    bracket_clip_check: ["BBS50230_L01S01"],
    label_check: ["BBS50240_L01S01"],
    pin_check: ["BBS50250_L01S01"],
  },
  // FORD LDM
  ford_ldm: {
    ict: ["BBS21110_L01S01"],
    flash: ["BBS21120_L01S01"],
    eol: ["BBS21210_L01S01", "BBS21210_L01S02"],
  },
  // HLI LINE 1
  hli_1: {
    ict: ["BBS04060_L01S01"],
    flash: ["BBS04070_L01S01", "BBS04070_L01S02"],
    function: ["BBS04080_L01S01", "BBS04080_L01S02"],
    eol: ["BBS04210_L01S01", "BBS04210_L01S02"],
    leak: ["BBS04220_L01S01", "BBS04220_L01S02"],
  },
  // HLI LINE 2
  hli_2: {
    ict: ["BBS04060_L02S01"],
    flash: ["BBS04070_L02S01", "BBS04070_L02S02"],
    function: ["BBS04080_L02S01", "BBS04080_L02S02"],
    eol: ["BBS04210_L02S01", "BBS04210_L02S02"],
    leak: ["BBS04220_L02S01", "BBS04220_L02S02"],
  },
  // HLI LINE 3
  hli_3: {
    ict: ["BBS04060_L03S01"],
    flash: ["BBS04070_L03S01", "BBS04070_L03S02"],
    function: ["BBS04080_L03S01", "BBS04080_L03S02"],
    eol: ["BBS04210_L03S01", "BBS04210_L03S02"],
    leak: ["BBS04220_L03S01", "BBS04220_L03S02"],
  },
  // HLI LINE 4
  hli_4: {
    pin_insertion: ["BBS04020_L01S01"],
    milling: ["BBS04050_L04S01"],
    ict: ["BBS04060_L04S01"],
    flash: ["BBS04070_L04S01", "BBS04070_L04S02"],
    function: ["BBS04080_L04S01", "BBS04080_L04S02"],
    shield_assembly: ["BBS04300_L04S01"],
    gap_filler: ["BBS04340_L04S01"],
    dow_corning: ["BBS04350_L04S01"],
    gfdc: ["BBS04360_L04S01"],
    housing_assembly: ["BBS04370_L04S01"],
    screwing: ["BBS04380_L04S01"],
    lasering: ["BBS04390_L04S01"],
    laser_label: ["BBS04400_L04S01"],
    eol: ["BBS04210_L04S01", "BBS04210_L04S02"],
    leak: ["BBS04220_L04S01", "BBS04220_L04S02"],
    pin_check: ["BBS04230_L04S01"],
  },
  // PHD
  phd: {
    pin_insertion: ["BBS04020_L03S01"],
    milling: ["BBS23110_L01S01"],
    ict: ["BBS23120_L01S01"],
    flash: ["BBS23130_L01S01", "BBS23130_L01S02"],
    function: ["BBS23140_L01S01", "BBS23140_L01S02"],
    shield_assembly: ["BBS23150_L01S01"],
    camera_check_of_shield_assembly: ["BBS23156_L01S01"],
    dispensing_and_aoi: ["BBS23170_L01S01"],
    pcb_cover_assembly: ["BBS23180_L01S01"],
    plastic_laser: ["BBS23190_L01S01"],
    assembly: ["BBS23200_L01S01"],
    metal_riveting: ["BBS23210_L01S01"],
    metal_rivet_check: ["BBS23216_L01S01"],
    eol: ["BBS23230_L01S01", "BBS23230_L01S02"],
    leak: ["BBS23240_L01S01", "BBS23240_L01S02"],
    pin_check: ["BBS23250_L01S01"],
    metal_laser: ["BBS23260_L01S01"],
    metal_laser_check: ["BBS23270_L01S01"],
  },
  // LSM
  lsm: {
    pin_insertion: ["BBS04020_L03S01"],
    milling: ["BBS23110_L01S01"],
    ict: ["BBS23120_L01S01"],
    flash: ["BBS23130_L01S01", "BBS23130_L01S02"],
    ir_riveting: ["BBS23160_L01S01"],
    rivet_check: ["BBS23166_L01S01"],
    dmd_cap_removal: ["BBS23220_L01S01"],
    eol: ["BBS23230_L01S01", "BBS23230_L01S02"],
    pin_check: ["BBS23250_L01S01"],
  },
  // VOLVO HCM
  volvo_hcm: {
    ict: ["BBS19120_L01S01", "BBS19120_L01S02"],
    flash: ["BBS19130_L01S01", "BBS19130_L01S02"],
    function: ["BBS19140_L01S01", "BBS19140_L01S02"],
    eol: ["BBS19280_L01S01", "BBS19280_L01S02"],
    leak: ["BBS19290_L01S01", "BBS19290_L01S02"],
  },
  // MAGNA
  magna: {
    ict: ["BBS01040_L01S01"],
    flash: ["BBS01046_L01S01"],
    eol: ["BBS01050_L01S01", "BBS01050_L01S02"],
  },
  // SRM
  srm: {
    ict: ["BBS10030_L01S01"],
    flash: ["BBS10040_L01S01"],
    eol: ["BBS10080_L01S01", "BBS10080_L01S02", "BBS10080_L01S03"],
  },
  // Volkswagen
  vw_afs: {
    ict: ["BBS25130_L01S01"],
    flash: ["BBS25140_L01S01"],
    eol: ["BBS25170_L01S01"],
  },
};

// Producing materials per line
const materialsPerLine = {
  phd: ["A2C7825771500"],
  lsm: ["A2C7825760500"],
  hli_2: ["A2C7822600500"],
  hli_3: ["A2C7822600500"],
  hli_4: ["A2C7822600500"],
};

// Materials description
const materialDescription = {
  // PHD
  A2C782577: "LCM PHD 2.2",
  // LSM
  A2C782576: "LCM LSM 2.2",
  // HLI
  A2C782260: "LCM MB MRA2 LECU RD 6K PSI5 SH",
};
