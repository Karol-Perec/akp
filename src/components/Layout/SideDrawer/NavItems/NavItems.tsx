import { Whatshot } from "@mui/icons-material";
import { List } from "@mui/material";
import { MouseEventHandler } from "react";
import ROUTES from "../../../../Routes";
import NavItem from "./NavItem/NavItem";

interface NavItemsProps {
  onNavItemClick: MouseEventHandler;
}

const NavItems = ({ onNavItemClick }: NavItemsProps) => (
  <List>
    <NavItem
      href={ROUTES.MAIN_PAGE.path}
      onClick={onNavItemClick}
      icon={<Whatshot />}
    >
      {ROUTES.MAIN_PAGE.label}
    </NavItem>

    <NavItem
      href={ROUTES.ABOUT_US.path}
      onClick={onNavItemClick}
      icon={<Whatshot />}
    >
      {ROUTES.ABOUT_US.label}
    </NavItem>

    <NavItem
      href={ROUTES.OFFER.path}
      onClick={onNavItemClick}
      icon={<Whatshot />}
    >
      {ROUTES.OFFER.label}
    </NavItem>

    <NavItem
      href={ROUTES.CONTACT.path}
      onClick={onNavItemClick}
      icon={<Whatshot />}
    >
      {ROUTES.CONTACT.label}
    </NavItem>
  </List>
);

export default NavItems;
