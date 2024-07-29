const data = {
  // FORD BCM
  ford_bcm: {
    ict: {
      testplanName: "ICT_KEYSIGHT",
      stationName: ["BBS50110_L01S01"],
    },
    flash: {
      testplanName: "BCM_FLASH",
      stationName: ["BBS50120_L01S01"],
    },
    coating_top: {
      testplanName: "COATINGTOP",
      stationName: ["BBS50130_L01S01"],
    },
    aoi_top: {
      testplanName: "AOI_TOP",
      stationName: ["BBS50140_L01S01"],
    },
    coating_bottom: {
      testplanName: "COATINGBOTTOM",
      stationName: ["BBS50150_L01S01"],
    },
    aoi_bottom: {
      testplanName: "AOI_BOT",
      stationName: ["BBS50160_L01S01"],
    },
    pin_insertion: {
      testplanName: "PININSERTION",
      stationName: ["BBS50170_L01S01"],
    },
    milling: {
      testplanName: "MILLING",
      stationName: ["BBS50180_L01S01"],
    },
    housing_assembly: {
      testplanName: "HOUSINGASSEMBLY",
      stationName: ["BBS50190_L01S01"],
    },
    housing_clip_check: {
      testplanName: "HOUSINGCLIPCHECK",
      stationName: ["BBS50200_L01S01"],
    },
    eol: {
      testplanName: "AN_EOL",
      stationName: [
        "BBS50210_L01S01",
        "BBS50210_L01S02",
        "BBS50210_L01S03",
        "BBS50210_L01S04",
      ],
    },
    bracket_assembly: {
      testplanName: "BRACKETASSEMBLY",
      stationName: ["BBS50220_L01S01"],
    },
    bracket_clip_check: {
      testplanName: "BRACKETCLIPCHECK",
      stationName: ["BBS50230_L01S01"],
    },
    label_check: {
      testplanName: "LABELCHECK",
      stationName: ["BBS50240_L01S01"],
    },
    pin_check: {
      testplanName: "PINCHECK",
      stationName: ["BBS50250_L01S01"],
    },
  },
  // FORD LDM
  ford_ldm: {
    ict: {
      testplanName: "ICT",
      stationName: ["BBS21110_L01S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS21120_L01S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS21210_L01S01", "BBS21210_L01S02"],
    },
  },
  // HLI LINE 1
  hli_1: {
    ict: {
      testplanName: "ICT_TERADYNE",
      stationName: ["BBS04060_L01S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS04070_L01S01", "BBS04070_L01S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS04080_L01S01", "BBS04080_L01S02"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS04210_L01S01", "BBS04210_L01S02"],
    },
    leak: {
      testplanName: "LEAK",
      stationName: ["BBS04220_L01S01", "BBS04220_L01S02"],
    },
  },
  // HLI LINE 2
  hli_2: {
    ict: {
      testplanName: "ICT_TERADYNE",
      stationName: ["BBS04060_L02S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS04070_L02S01", "BBS04070_L02S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS04080_L02S01", "BBS04080_L02S02"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS04210_L02S01", "BBS04210_L02S02"],
    },
    leak: {
      testplanName: "LEAK",
      stationName: ["BBS04220_L02S01", "BBS04220_L02S02"],
    },
  },
  // HLI LINE 3
  hli_3: {
    ict: {
      testplanName: "ICT_TERADYNE",
      stationName: ["BBS04060_L03S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS04070_L03S01", "BBS04070_L03S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS04080_L03S01", "BBS04080_L03S02"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS04210_L03S01", "BBS04210_L03S02"],
    },
    leak: {
      testplanName: "LEAK",
      stationName: ["BBS04220_L03S01", "BBS04220_L03S02"],
    },
  },
  // HLI LINE 4
  hli_4: {
    pin_insertion: {
      testplanName: "PININSERTION",
      stationName: ["BBS04020_L01S01"],
    },
    milling: {
      testplanName: "ASYS_MILLING",
      stationName: ["BBS04050_L04S01"],
    },
    ict: {
      testplanName: "ICT_TERADYNE_4",
      stationName: ["BBS04060_L04S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS04070_L04S01", "BBS04070_L04S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS04080_L04S01", "BBS04080_L04S02"],
    },
    shield_assembly: {
      testplanName: "SHIELDASSEMBLY",
      stationName: ["BBS04300_L04S01"],
    },
    gap_filler: {
      testplanName: "GAPFILLER",
      stationName: ["BBS04340_L04S01"],
    },
    dow_corning: {
      testplanName: "DOWCORNING",
      stationName: ["BBS04350_L04S01"],
    },
    gfdc: {
      testplanName: "GFDC",
      stationName: ["BBS04360_L04S01"],
    },
    housing_assembly: {
      testplanName: "HOUSINGASSEMBLY",
      stationName: ["BBS04370_L04S01"],
    },
    screwing: {
      testplanName: "SCREWING_L04",
      stationName: ["BBS04380_L04S01"],
    },
    lasering: {
      testplanName: "LASERING",
      stationName: ["BBS04390_L04S01"],
    },
    laser_label: {
      testplanName: "LASER_LABEL2",
      stationName: ["BBS04400_L04S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS04210_L04S01", "BBS04210_L04S02"],
    },
    leak: {
      testplanName: "LEAK",
      stationName: ["BBS04220_L04S01", "BBS04220_L04S02"],
    },
    pin_check: {
      testplanName: "PINCHECK_L04",
      stationName: ["BBS04230_L04S01"],
    },
  },
  // PHD
  phd: {
    pin_insertion: {
      testplanName: "PININSERTION",
      stationName: ["BBS04020_L03S01"],
    },
    milling: {
      testplanName: "ASYS_MILLING",
      stationName: ["BBS23110_L01S01"],
    },
    ict: {
      testplanName: "ICT_TERADYNE",
      stationName: ["BBS23120_L01S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS23130_L01S01", "BBS23130_L01S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS23140_L01S01", "BBS23140_L01S02"],
    },
    shield_assembly: {
      testplanName: "SHIELD_ASSEMBLY",
      stationName: ["BBS23150_L01S01"],
    },
    camera_check_of_shield_assembly: {
      testplanName: "CAMERA_CHECK_OF_SHIELD_ASSEMBLY",
      stationName: ["BBS23156_L01S01"],
    },
    dispensing_and_aoi: {
      testplanName: "DISPENSINGAOI",
      stationName: ["BBS23170_L01S01"],
    },
    pcb_cover_assembly: {
      testplanName: "PCB_COVER_ASSEMBLY",
      stationName: ["BBS23180_L01S01"],
    },
    plastic_laser: {
      testplanName: "PLASTIC_LASER",
      stationName: ["BBS23190_L01S01"],
    },
    assembly: {
      testplanName: "ASSEMBLY",
      stationName: ["BBS23200_L01S01"],
    },
    metal_riveting: {
      testplanName: "METAL_RIVETING",
      stationName: ["BBS23210_L01S01"],
    },
    metal_rivet_check: {
      testplanName: "METAL_RIVET_CHECK",
      stationName: ["BBS23216_L01S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS23230_L01S01", "BBS23230_L01S02"],
    },
    leak: {
      testplanName: "LEAK",
      stationName: ["BBS23240_L01S01", "BBS23240_L01S02"],
    },
    pin_check: {
      testplanName: "PINCHECK",
      stationName: ["BBS23250_L01S01"],
    },
    metal_laser: {
      testplanName: "METAL_LASER",
      stationName: ["BBS23260_L01S01"],
    },
    metal_laser_check: {
      testplanName: "METAL_LASER_CHECK",
      stationName: ["BBS23270_L01S01"],
    },
  },
  // LSM
  lsm: {
    pin_insertion: {
      testplanName: "PININSERTION",
      stationName: ["BBS04020_L03S01"],
    },
    milling: {
      testplanName: "ASYS_MILLING",
      stationName: ["BBS23110_L01S01"],
    },
    ict: {
      testplanName: "ICT_TERADYNE",
      stationName: ["BBS23120_L01S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS23130_L01S01", "BBS23130_L01S02"],
    },
    ir_riveting: {
      testplanName: "IR RIVETING",
      stationName: ["BBS23160_L01S01"],
    },
    rivet_check: {
      testplanName: "RIVETCHECK",
      stationName: ["BBS23166_L01S01"],
    },
    dmd_cap_removal: {
      testplanName: "DMD_CAP_REMOVAL",
      stationName: ["BBS23220_L01S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS23230_L01S01", "BBS23230_L01S02"],
    },
    pin_check: {
      testplanName: "PINCHECK",
      stationName: ["BBS23250_L01S01"],
    },
  },
  // VOLVO HCM
  volvo_hcm: {
    ict: {
      testplanName: "ICT",
      stationName: ["BBS19120_L01S01", "BBS19120_L01S02"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS19130_L01S01", "BBS19130_L01S02"],
    },
    function: {
      testplanName: "FKT",
      stationName: ["BBS19140_L01S01", "BBS19140_L01S02"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS19280_L01S01", "BBS19280_L01S02"],
    },
    leak: {
      testplanName: "LEAKAGETEST",
      stationName: ["BBS19290_L01S01", "BBS19290_L01S02"],
    },
  },
  // MAGNA
  magna: {
    ict: {
      testplanName: "ICT_KEYSIGHT",
      stationName: ["BBS01040_L01S01"],
    },
    flash: {
      testplanName: "MAGNA_FLASH",
      stationName: ["BBS01046_L01S01"],
    },
    eol: {
      testplanName: "MAGNA_EOL",
      stationName: ["BBS01050_L01S01", "BBS01050_L01S02"],
    },
  },
  // SRM
  srm: {
    ict: {
      testplanName: "ICT_V1_01_",
      stationName: ["BBS10030_L01S01"],
    },
    flash: {
      testplanName: "FSH + FKT",
      stationName: ["BBS10040_L01S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS10080_L01S01", "BBS10080_L01S02", "BBS10080_L01S03"],
    },
  },
  // Volkswagen
  volkswagen: {
    ict: {
      testplanName: "ICT_KEYSIGHT",
      stationName: ["BBS25130_L01S01"],
    },
    flash: {
      testplanName: "FLASH",
      stationName: ["BBS25140_L01S01"],
    },
    eol: {
      testplanName: "EOL",
      stationName: ["BBS25170_L01S01"],
    },
  },
};
