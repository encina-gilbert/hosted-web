const data = {
  // HLI LINE 1
  hli_1: {
    ict: {
      testplanName: 'ICT_TERADYNE',
      stationName: ['BBS04060_L01S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS04070_L01S01', 'BBS04070_L01S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS04080_L01S01', 'BBS04080_L01S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS04210_L01S01', 'BBS04210_L01S02'],
    },
    leak: {
      testplanName: 'LEAK',
      stationName: ['BBS04220_L01S01', 'BBS04220_L01S02'],
    },
  },
  // HLI LINE 2
  hli_2: {
    ict: {
      testplanName: 'ICT_TERADYNE',
      stationName: ['BBS04060_L02S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS04070_L02S01', 'BBS04070_L02S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS04080_L02S01', 'BBS04080_L02S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS04210_L02S01', 'BBS04210_L02S02'],
    },
    leak: {
      testplanName: 'LEAK',
      stationName: ['BBS04220_L02S01', 'BBS04220_L02S02'],
    },
  },
  // HLI LINE 3
  hli_3: {
    ict: {
      testplanName: 'ICT_TERADYNE',
      stationName: ['BBS04060_L03S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS04070_L03S01', 'BBS04070_L03S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS04080_L03S01', 'BBS04080_L03S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS04210_L03S01', 'BBS04210_L03S02'],
    },
    leak: {
      testplanName: 'LEAK',
      stationName: ['BBS04220_L03S01', 'BBS04220_L03S02'],
    },
  },
  // HLI LINE 4
  hli_4: {
    ict: {
      testplanName: 'ICT_TERADYNE',
      stationName: ['BBS04060_L04S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS04070_L04S01', 'BBS04070_L04S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS04080_L04S01', 'BBS04080_L04S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS04210_L04S01', 'BBS04210_L04S02'],
    },
    leak: {
      testplanName: 'LEAK',
      stationName: ['BBS04220_L04S01', 'BBS04220_L04S02'],
    },
  },
  // PHD AND LSM
  phd_and_lsm: {
    ict: {
      testplanName: 'ICT_TERADYNE',
      stationName: ['BBS23120_L01S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS23130_L01S01', 'BBS23130_L01S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS23140_L01S01', 'BBS23140_L01S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS23230_L01S01', 'BBS23230_L01S02'],
    },
    leak: {
      testplanName: 'LEAK',
      stationName: ['BBS23240_L01S01', 'BBS23240_L01S02'],
    },
  },
  // VOLVO HCM
  volvo_hcm: {
    ict: {
      testplanName: 'ICT',
      stationName: ['BBS19120_L01S01', 'BBS19120_L01S02'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS19130_L01S01', 'BBS19130_L01S02'],
    },
    function: {
      testplanName: 'FKT',
      stationName: ['BBS19140_L01S01', 'BBS19140_L01S02'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS19280_L01S01', 'BBS19280_L01S02'],
    },
    leak: {
      testplanName: 'LEAKAGETEST',
      stationName: ['BBS19290_L01S01', 'BBS19290_L01S02'],
    },
  },
  // FORD LDM
  ford_ldm: {
    ict: {
      testplanName: 'ICT',
      stationName: ['BBS21110_L01S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS21120_L01S01'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS21210_L01S01', 'BBS21210_L01S02'],
    },
  },
  // MAGNA
  magna: {
    ict: {
      testplanName: 'ICT_KEYSIGHT',
      stationName: ['BBS01040_L01S01'],
    },
    flash: {
      testplanName: 'MAGNA_FLASH',
      stationName: ['BBS01046_L01S01'],
    },
    eol: {
      testplanName: 'MAGNA_EOL',
      stationName: ['BBS01050_L01S01', 'BBS01050_L01S02'],
    },
  },
  // SRM
  srm: {
    ict: {
      testplanName: 'ICT_V1_01_',
      stationName: ['BBS10030_L01S01'],
    },
    flash: {
      testplanName: 'FSH + FKT',
      stationName: ['BBS10040_L01S01'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS10080_L01S01', 'BBS10080_L01S02', 'BBS10080_L01S03'],
    },
  },
  // Volkswagen
  volkswagen: {
    ict: {
      testplanName: 'ICT_KEYSIGHT',
      stationName: ['BBS25130_L01S01'],
    },
    flash: {
      testplanName: 'FLASH',
      stationName: ['BBS25140_L01S01'],
    },
    eol: {
      testplanName: 'EOL',
      stationName: ['BBS25170_L01S01'],
    },
  },
};
