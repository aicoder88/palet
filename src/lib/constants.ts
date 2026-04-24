export const COMPANY = {
  name: "Šlišurić d.o.o.",
  shortName: "Šlišurić",
  legalName: "Pilana Šlišurić d.o.o.",
  tagline: "Drvene palete za proizvođače od 1970-ih",
  positioning:
    "Proizvođač drvenih paleta i drvene ambalaže — isporuka u cijeloj Europskoj uniji i regiji (HR, BiH, RS, SI). Licencirani EPAL partner, ISPM-15 tretman za izvoz van EU.",
  address: "Ulica Vladimira Nazora 12, 10000 Zagreb, Hrvatska",
  addressLocality: "Zagreb",
  addressRegion: "Grad Zagreb",
  postalCode: "10000",
  addressCountry: "HR",
  phone: "+385 1 234 5678",
  phoneDisplay: "+385 1 234 5678",
  email: "info@slisuric.hr",
  rfqEmail: "ponude@slisuric.hr",
  oib: "12345678901",
  mbs: "080123456",
  workingHours: "Pon–Pet: 07:00–16:00",
  geo: { lat: 45.815, lng: 15.9819 },
  siteUrl: "https://slisuric.hr",
  foundedYear: 1972,
  markets: [
    "Hrvatska",
    "Slovenija",
    "Austrija",
    "Njemačka",
    "Italija",
    "Mađarska",
    "Češka",
    "Slovačka",
    "Poljska",
    "Nizozemska",
    "Francuska",
    "Bosna i Hercegovina",
    "Srbija",
  ],
  marketsLabel: "Cijela EU + regija (HR · SI · AT · DE · IT · BA · RS · HU · CZ · SK · PL)",
};

export const NAV_LINKS = [
  { label: "Naslovnica", href: "/" },
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Usluge", href: "/usluge" },
  { label: "Reference", href: "/reference-kupci" },
  { label: "Kontakt", href: "/kontakt" },
];

// Peer manufacturer/distributor logo row — "Vjeruju nam"
// Names are placeholders until written permissions are secured.
// Replace entries below with real customer names + logo files once signed off.
export const PEER_LOGOS = [
  { name: "Referenca u pripremi", industry: "Proizvodnja hrane", placeholder: true },
  { name: "Referenca u pripremi", industry: "Distribucija pića", placeholder: true },
  { name: "Referenca u pripremi", industry: "Logistika", placeholder: true },
];

// Case studies — populated once customer permissions land.
export const CASE_STUDIES = [
  {
    slug: "regionalni-distributer",
    companyLabel: "Regionalni distributer pića",
    industry: "FMCG distribucija",
    region: "Hrvatska / BiH",
    volumePerMonth: "2.400",
    tenureYears: 9,
    palletType: "EPAL + industrijske 1200×1000",
    challenge:
      "Prethodni dobavljač nije držao zalihe u vršnim mjesecima. Distribucija je zastajala u srpnju i kolovozu.",
    solution:
      "Prelazimo na mjesečne okvirne narudžbe s garantiranom zalihom od 3.000 paleta. Svaka isporuka u roku 48h.",
    quote:
      "Od prelaska na Šlišurić nijednom nismo zastali zbog paleta. To je za distribuciju neplativo.",
    quoteAuthor: "Voditelj nabave",
    permissionPending: true,
  },
  {
    slug: "proizvodac-prehrane",
    companyLabel: "Srednji proizvođač prehrambenih proizvoda",
    industry: "Prehrambena industrija",
    region: "Bosna i Hercegovina",
    volumePerMonth: "1.100",
    tenureYears: 6,
    palletType: "EPAL + ISPM-15 za izvoz",
    challenge:
      "Izvozni kupci traže ispravnu ISPM-15 dokumentaciju. Prethodni dobavljač kasnio je s potvrdama tjedan dana.",
    solution:
      "Svaka izvozna paleta isporučuje se s popratnom ISPM-15 potvrdom unutar 24h. Oznake vidljive, dokumentacija u PDF-u.",
    quote:
      "Dokumentacija je uredna od prvog dana. Carina nikad nije zaustavila pošiljku.",
    quoteAuthor: "Direktor proizvodnje",
    permissionPending: true,
  },
  {
    slug: "logisticki-operater",
    companyLabel: "Regionalni 3PL operater",
    industry: "Logistika i transport",
    region: "Srbija / Hrvatska",
    volumePerMonth: "3.800",
    tenureYears: 4,
    palletType: "EPAL + polovne EUR",
    challenge:
      "Obrt paleta između skladišta zahtijeva stalnu opskrbu novima i otkup polovnih. Dva dobavljača, puno administracije.",
    solution:
      "Jedan partner za obje strane: prodaja novih i otkup polovnih EUR paleta. Mjesečni izvještaj, jedan račun.",
    quote:
      "Umjesto dva dobavljača i dva računa, sve rješavamo s jednim ljudima. Vrijeme uštedjeno se broji u satima tjedno.",
    quoteAuthor: "Operativni direktor",
    permissionPending: true,
  },
];

// Verifiable, non-fabricated social proof strip.
export const SOCIAL_PROOF_ITEMS = [
  "Tradicija od 1970-ih",
  "ISPM-15 ovlašteni",
  "EPAL licencirani partner",
  "Vlastita pilana i proizvodnja",
  "Isporuka u cijelu EU",
  "16 tipova paleta u redovnoj proizvodnji",
  "Otkup polovnih EUR paleta",
  "Termičko tretiranje za izvoz",
];

export const HERO = {
  eyebrow: "Drvene palete za proizvođače i distributere · EU-wide",
  h1: "Palete koje stižu kad ste ih obećali svojim kupcima.",
  subheadline:
    "Šlišurić je licencirani proizvođač EPAL i industrijskih drvenih paleta. Isporučujemo proizvođačima i distributerima u cijeloj Europskoj uniji i regiji — vlastita pilana, ISPM-15 tretman za izvoz van EU, ured za nabavu koji diže telefon.",
  primaryCta: "Zatražite ponudu (odgovor u 24h)",
  secondaryCta: "+385 1 234 5678",
};

export const WHY_SLISURIC = [
  {
    stat: "Vlastita pilana",
    label: "Od sirovine do palete",
    description:
      "Ne preprodajemo — režemo, sušimo i slažemo u vlastitoj proizvodnji. Jedan ugovor pokriva cijeli lanac.",
    icon: "factory",
  },
  {
    stat: "EPAL",
    label: "Licencirani partner",
    description:
      "Svaka EPAL paleta zadovoljava UIC 435-2 normu. Prihvaćena u otvorenom EPAL poolu diljem Europe.",
    icon: "shield",
  },
  {
    stat: "ISPM-15",
    label: "Termičko tretiranje",
    description:
      "Vlastito ovlaštenje za termičko tretiranje. Izvozne pošiljke s ispravnom dokumentacijom u 24h.",
    icon: "truck",
  },
  {
    stat: "EU-wide",
    label: "Isporuka u cijelu EU",
    description:
      "Redovite rute u zemlje EU (AT, DE, IT, HU, SI, CZ, SK, PL, NL, FR) i regiju (BA, RS). Jedinstven kontakt, tjedno planiranje.",
    icon: "layers",
  },
];

// Testimonials retained from existing site — replace with signed-off quotes
// once real customer permissions land (see CASE_STUDIES).
export const TESTIMONIALS = [
  {
    name: "Referenca u pripremi",
    title: "Voditelj logistike, peer tvrtka u BiH",
    quote:
      "Citat dostupan nakon pismene potvrde kupca. Studija slučaja vidljiva na /reference-kupci.",
    initials: "––",
    permissionPending: true,
  },
  {
    name: "Referenca u pripremi",
    title: "Procurement Manager, peer tvrtka u HR",
    quote:
      "Citat dostupan nakon pismene potvrde kupca. Studija slučaja vidljiva na /reference-kupci.",
    initials: "––",
    permissionPending: true,
  },
  {
    name: "Referenca u pripremi",
    title: "Direktor, peer tvrtka u RS",
    quote:
      "Citat dostupan nakon pismene potvrde kupca. Studija slučaja vidljiva na /reference-kupci.",
    initials: "––",
    permissionPending: true,
  },
];

export const PRODUCT_TYPES = [
  {
    title: "Euro / EPAL palete 1200×800",
    description:
      "Licencirane EPAL palete prema UIC 435-2. Nosivost do 1.500 kg, prihvaćene u otvorenom EPAL poolu.",
    icon: "icon-noun-wooden-palette-103108",
    href: "/proizvodi#epal",
    keywords: "epal palete, euro palete, palete 1200x800",
  },
  {
    title: "Industrijske palete po mjeri",
    description:
      "16 standardnih tipova i izrada po nacrtu kupca do 3.000 mm. Za specifične linije pakiranja.",
    icon: "icon-noun-pallet-882259c",
    href: "/proizvodi#industrijske",
    keywords: "industrijske palete, palete po mjeri, nestandardne palete",
  },
  {
    title: "Polovne EUR palete",
    description:
      "Prodaja klasa A/B/C polovnih EUR paleta. Otkup vaših polovnih paleta po dogovorenom cjeniku.",
    icon: "icon-noun-pallet-882259d",
    href: "/proizvodi#polovne",
    keywords: "polovne palete, rabljene palete, otkup paleta",
  },
  {
    title: "ISPM-15 termičko tretiranje",
    description:
      "Termički tretirane palete za izvoz van EU. Ovlaštena oznaka i PDF dokumentacija uz svaku pošiljku.",
    icon: "icon-noun-reforestation-6050469",
    href: "/usluge#ispm15",
    keywords: "ispm-15, termičko tretiranje, izvozne palete",
  },
  {
    title: "Drveni elementi i kocke",
    description:
      "Euro elementi, nožice i kocke za palete, poklopci za gajbe, daske po narudžbi.",
    icon: "icon-noun-wooden-beam-2871921",
    href: "/proizvodi#elementi",
    keywords: "kocke za palete, drveni elementi, euro elementi",
  },
  {
    title: "Biomasa i građevinska građa",
    description:
      "Piljevina, kora, okrajci za briketare. Krovna građa, lamperija, brodski pod — sve iz vlastite pilane.",
    icon: "icon-noun-log-pile-765200",
    href: "/proizvodi#biomasa",
    keywords: "biomasa, piljevina, građevinska građa, pilana",
  },
];

// Payment ladder — plain-language "Kako radimo" on /uvjeti-poslovanja
export const PAYMENT_LADDER = [
  {
    step: "01",
    title: "Prva narudžba",
    terms: "Avansno plaćanje 100%",
    description:
      "Potvrda narudžbe, predračun, uplata. Isporuka u dogovorenom roku od primitka uplate. Standard za sve nove kupce, neovisno o veličini.",
  },
  {
    step: "02",
    title: "Nakon 3 uspješne narudžbe",
    terms: "Avans 50% + 50% prije isporuke",
    description:
      "Poslovni odnos je utvrđen. Uvodimo podjelu — pola pri narudžbi, pola prije isporuke. Olakšava vaše planiranje novčanog toka.",
  },
  {
    step: "03",
    title: "Nakon 6 mjeseci redovite suradnje",
    terms: "Kreditne odgode do 30 dana",
    description:
      "Za kupce s urednim plaćanjem otvaramo net-30 terms uz osiguranje plaćanja (mjenica ili bonitet). Pristupamo svakom slučaju pojedinačno.",
  },
  {
    step: "04",
    title: "Okvirni ugovor",
    terms: "Net-30 ili net-60, dogovorno",
    description:
      "Godišnji okvirni ugovor s mjesečnim kvotama, fiksnim cijenama i kreditnim odgodama do 60 dana. Za stalne distribucijske partnere.",
  },
];

// SEO — long-tail Croatian + regional keywords
export const SEO_KEYWORDS = [
  "drvene palete",
  "drvene palete Hrvatska",
  "proizvođač paleta Zagreb",
  "EPAL palete",
  "euro palete 1200x800",
  "industrijske palete po mjeri",
  "polovne palete Zagreb",
  "otkup polovnih paleta",
  "ISPM-15 termičko tretiranje",
  "palete za izvoz",
  "drvena ambalaža",
  "drveni elementi za palete",
  "kocke za palete",
  "biomasa piljevina",
  "građevinska drvena građa",
  "pilana Hrvatska",
  "palete BiH",
  "palete Srbija",
  "palete regija Balkan",
  "dobavljač paleta proizvođačima",
  "izvoz paleta EU",
  "EPAL palete Europa",
  "palete Austrija Njemačka",
  "palete Italija Slovenija",
  "palete za cijelu EU",
].join(", ");
