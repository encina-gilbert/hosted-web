//-----------------------------------------------------------------//
// STATION DATA                                                    //
//-----------------------------------------------------------------//

const stationsData = {
  // FORD BCM
  ford_bcm: {
    ict: ["BBS50110_L01S01"],
    flash: ["BBS50120_L01S01"],
    eol_1a: ["BBS50210_L01S01"],
    eol_1b: ["BBS50210_L01S02"],
    eol_2a: ["BBS50210_L01S03"],
    eol_2b: ["BBS50210_L01S04"],
  },
  // FORD LDM
  ford_ldm: {
    ict: ["BBS21110_L01S01"],
    flash: ["BBS21120_L01S01"],
    eol: ["BBS21210_L01S01", "BBS21210_L01S02"],
  },
  // FORD DCU / LGTL
  "ford ( dcu / lgtl )": {
    "ict / flash": ["BBS15010_L01S01"],
    eol_1: ["BBS15100_L01S01"],
    eol_2: ["BBS15100_L01S02"],
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
    ict: ["BBS04060_L04S01"],
    flash: ["BBS04070_L04S01", "BBS04070_L04S02"],
    function: ["BBS04080_L04S01", "BBS04080_L04S02"],
    eol: ["BBS04210_L04S01", "BBS04210_L04S02"],
    leak: ["BBS04220_L04S01", "BBS04220_L04S02"],
  },
  // PHD / LSM
  "phd / lsm": {
    ict: ["BBS23120_L01S01"],
    flash: ["BBS23130_L01S01", "BBS23130_L01S02"],
    "function (phd only)": ["BBS23140_L01S01", "BBS23140_L01S02"],
    eol: ["BBS23230_L01S01", "BBS23230_L01S02"],
    "leak (phd only)": ["BBS23240_L01S01", "BBS23240_L01S02"],
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
    "flash / fkt" : ["BBS10040_L01S01"],
    eol: ["BBS10080_L01S01", "BBS10080_L01S02", "BBS10080_L01S03"],
  },
  // Volkswagen
  vw_afs: {
    ict: ["BBS25130_L01S01"],
    flash: ["BBS25140_L01S01"],
    eol: ["BBS25170_L01S01"],
  },
  // Audi PPE
  audi_ppe: {
    flash: ["BBS12030_L01S01"],
    fct: ["BBS12090_L01S01", "BBS12090_L01S02"],
    eol_1: ["BBS12120_L01S01"],
    eol_2: ["BBS12120_L01S02"],
    eol_3: ["BBS12120_L01S03"],
    eol_4: ["BBS12120_L01S04"],
  },
  // Audi SCU
  audi_scu: {
    ict: ["BBS02030_L01S01"],
    flash_1: ["BBS02040_L01S01"],
    flash_2: ["BBS02040_L01S02"],
    eol_1: ["BBS02060_L01S01"],
    eol_2: ["BBS02060_L01S02"],
  },
  // ZKW
  zkw: {
    "ict / flash": ["BBS26130_L01S01"],
    eol: ["BBS26220_L01S01"]
  }
};

//-----------------------------------------------------------------//
// MATERIALS PER LINE                                              //
//-----------------------------------------------------------------//

const materialsPerLine = {
  ford_bcm: ["A2C7883160400"],
  ford_ldm: ["A2C7836920500"],
  "phd / lsm": ["A2C7825771500", "A2C7825760500"],
  hli_1: ["A2C7637621000", "A2C7873960100"],
  hli_2: [
    "A2C7822600500",
    "A2C7822670500",
    "A2C7822680500",
    "A2C7822710500",
    "A2C7822720500",
  ],
  hli_3: [
    "A2C7822600500",
    "A2C7822670500",
    "A2C7822680500",
    "A2C7822710500",
    "A2C7822720500",
  ],
  hli_4: [
    "A2C7822600500",
    "A2C7822670500",
    "A2C7822680500",
    "A2C7822710500",
    "A2C7822720500",
    "AAA2255290500",
    "AAA2255300500",
  ],
  volvo_hcm: ["A2C7875830300", "A2C7875820300"],
  audi_ppe: ["AAA2213190600"]
};

//-----------------------------------------------------------------//
// MATERIAL DESCRIPTION                                            //
//-----------------------------------------------------------------//

const materialDescription = {
  // FORD BCM
  A2C788316: "BCU FOR MY24 V363 ICA3 Var B W2",
  // FORD LDM
  A2C783692: "LCM FOR MY22 4i (NX7A-13B626-AG)",
  // PHD
  A2C782577: "LCM PHD 2.2",
  // LSM
  A2C782576: "LCM LSM 2.2",
  // HLI 1
  A2C763762: "LCM MB RD 5CH HLI 3 Ana 50W",
  A2C787396: "LCM MB MRA2 HLI4 11K ana CAN",
  // HLI 2,3,4
  A2C782260: "LCM MB MRA2 LECU RD 6K PSI5 SH",
  A2C782267: "LCM MB MFA2 LECU RD 5K PSI5 SH",
  A2C782268: "LCM MB MFA2 LECU RD 5K ANA SH",
  A2C782271: "LCM MB MFA2 LECU RD 6K PSI5 Sh",
  A2C782272: "LCM MB MFA2 LECU RD 6K ANA Sh",
  AAA225529: "LCM MB MRA2 HLI4 11k CANterm",
  AAA225530: "LCM MB MRA2 HLI4 11k PSI5",
  // VOLVO HCM
  A2C787583: "LCM VOLVO HCM1.2_re MID",
  A2C787582: "LCM VOLVO HCM1.2_re HIGH",
  // AUDI PPE
  AAA221319: "SCU AUD E3 MY24 Basis 2"

};
