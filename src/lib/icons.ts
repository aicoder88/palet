// Šlišurić icon font — semantic map.
// Font-face + .icon-* classes defined in /src/styles/icons.css
// Full glyph catalogue (84 icons) lives in /icons/css/slisuric-ikone-codes.css

export const icons = {
  // Pallets (core product)
  palletEpal: "icon-noun-wooden-palette-103108",
  palletStandard: "icon-noun-pallet-882259a",
  palletIndustrial: "icon-noun-pallet-882259b",
  palletCustom: "icon-noun-pallet-882259c",
  palletUsed: "icon-noun-pallet-882259d",
  palletExport: "icon-noun-pallet-882259e",
  palletOneway: "icon-noun-pallet-882259f",
  palletA: "icon-noun-pallet-882254",
  palletB: "icon-noun-pallet-882256",
  palletC: "icon-noun-pallet-882257",
  palletD: "icon-noun-pallet-882258",
  palletE: "icon-noun-pallet-882259e",
  palletF: "icon-noun-pallet-882259f",

  // Saws & processing
  sawBand1: "icon-noun-band-saw-6323354",
  sawBand2: "icon-noun-band-saw-6545904",
  sawBand3: "icon-noun-band-saw-6644074",
  sawCircular: "icon-noun-circular-sawing-298403",
  sawMiter: "icon-noun-miter-saw-5244973",
  sawTable: "icon-noun-table-saw-6644075",
  sawMachine: "icon-noun-saw-machine-2087294",
  saw: "icon-noun-saw-5707047",

  // Lumber & elements
  lumber1: "icon-noun-lumber-2871922",
  lumber2: "icon-noun-lumber-3360478",
  timber1: "icon-noun-timber-4459705",
  timber2: "icon-noun-timber-6082638",
  timber3: "icon-noun-timber-6460382",
  timber4: "icon-noun-timber-920000",
  timberGate: "icon-noun-timber-gate-3078550",
  woodenBeam: "icon-noun-wooden-beam-2871921",
  woodPlank: "icon-noun-wood-plank-892122",
  roofJoist: "icon-noun-roof-joist-1329221",
  battenNail: "icon-noun-batten-nail-4517683",
  nailGun: "icon-noun-nail-gun-6545883",

  // Biomass / logs
  logPile1: "icon-noun-log-pile-765200",
  logPile2: "icon-noun-log-pile-765201",
  woodPile1: "icon-noun-wood-pile-2195329",
  woodPile2: "icon-noun-wood-pile-2195347",
  woodLogs: "icon-noun-wood-logs-6292038",
  treeCookie: "icon-noun-tree-cookie-4248869",
  wooden1: "icon-noun-wooden-6120123",
  wood1: "icon-noun-wood-1",
  wood2: "icon-noun-wood-95392",
  wood3: "icon-noun-wood-4020372",
  wood4: "icon-noun-wood-4020486",
  wood5: "icon-noun-wood-4020377",
  wood6: "icon-noun-wood-4097744",
  wood7: "icon-noun-wood-4302209",
  wood8: "icon-noun-wood-4302212",
  wood9: "icon-noun-wood-5386243",

  // Species & trees
  oak1: "icon-noun-oak-2207531",
  oak2: "icon-noun-oak-4988966",
  oakLeaf1: "icon-noun-oak-leaf-4435333",
  oakLeaf2: "icon-noun-oak-leaf-6204741",
  beech1: "icon-noun-beech-5234783",
  beech2: "icon-noun-beech-6121975",
  beechLeaf1: "icon-noun-beech-leaf-6092343",
  beechLeaf2: "icon-noun-beech-leaf-4435342",
  beechLeaves1: "icon-noun-beech-leaves-2436237",
  beechLeaves2: "icon-noun-beech-leaves-2436250",
  beechLeaves3: "icon-noun-beech-leaves-2436301",
  poplar1: "icon-noun-poplar-4486220",
  poplar2: "icon-noun-poplar-4678010",
  tulipPoplar: "icon-noun-tulip-poplar-5235109",
  pine: "icon-noun-pine-tree-5380812",
  fir: "icon-noun-fir-tree-850675",
  hornbeamLeaf: "icon-noun-hornbeam-leaf-4435341",
  hornbeamTree: "icon-noun-hornbeam-tree-1925619",
  reforestation: "icon-noun-reforestation-6050469",
  tree1: "icon-noun-tree-1271432",
  tree2: "icon-noun-tree-1537612",
  tree3: "icon-noun-tree-6143957",

  // Logistics & people
  forklift: "icon-noun-forklift-1247",
  workerMale: "icon-noun-male-worker-6194248",
  workerFemale: "icon-noun-female-worker-6194249",

  // Fences / decorative
  fence1: "icon-noun-fence-1653439",
  fence2: "icon-noun-fence-1929123",
  fence3: "icon-noun-fence-6838162",
  picketFence: "icon-noun-picket-fence-231771",
  woodenFence: "icon-noun-wooden-fence-1768825",

  // Floor / parquet / CLT
  floor1: "icon-noun-floor-1283250",
  floor2: "icon-noun-floor-4211865",
  floor3: "icon-noun-floor-6102335",
  herringbone1: "icon-noun-herringbone-parquet-2989576",
  herringbone2: "icon-noun-herringbone-parquet-floor-pattern-6581600",
  parquet: "icon-noun-parquet-6206197",
  clt: "icon-noun-clt-4965556",
} as const;

export type IconName = keyof typeof icons;

// Curated 16-glyph "made here" strip for homepage.
export const ICON_STRIP: IconName[] = [
  "palletEpal",
  "sawBand1",
  "forklift",
  "oak1",
  "beech1",
  "poplar1",
  "timber1",
  "logPile1",
  "nailGun",
  "workerMale",
  "reforestation",
  "treeCookie",
  "fir",
  "parquet",
  "clt",
  "woodPlank",
];
