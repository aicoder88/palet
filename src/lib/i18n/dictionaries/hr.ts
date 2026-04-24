// Croatian — source of truth for translation keys. When adding a key here,
// add it to every other dictionary (TypeScript will flag missing keys).
export type Dictionary = {
  nav: {
    home: string;
    products: string;
    services: string;
    references: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    brandAria: string;
  };
  language: {
    switcherLabel: string;
    current: string;
  };
};

const hr: Dictionary = {
  nav: {
    home: "Naslovnica",
    products: "Proizvodi",
    services: "Usluge",
    references: "Reference",
    about: "O nama",
    contact: "Kontakt",
    cta: "Zatražite ponudu",
    openMenu: "Otvori izbornik",
    brandAria: "Šlišurić — naslovnica",
  },
  language: {
    switcherLabel: "Promjena jezika",
    current: "Trenutni jezik",
  },
};

export default hr;
