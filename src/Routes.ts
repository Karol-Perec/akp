import { Whatshot } from "@mui/icons-material";
import { ElementType } from "react";

interface Page {
  label: string;
  path: string;
  Icon: ElementType;
}

const ROUTES: Page[] = [
  {
    label: "Strona Główna",
    path: "/",
    Icon: Whatshot,
  },
  {
    label: "O Nas",
    path: "/o-nas",
    Icon: Whatshot,
  },
  {
    label: "Oferta",
    path: "/oferta",
    Icon: Whatshot,
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    Icon: Whatshot,
  },
];

export default ROUTES;
