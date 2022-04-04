interface Page {
  label: string;
  path: string;
}

const ROUTES: Record<string, Page> = {
  MAIN_PAGE: {
    label: "Strona Główna",
    path: "/",
  },
  ABOUT_US: {
    label: "O Nas",
    path: "/o-nas",
  },
  OFFER: {
    label: "Oferta",
    path: "/oferta"
  },
  CONTACT: {
    label: "Kontakt",
    path: "/kontakt",
  },
};

export default ROUTES;
