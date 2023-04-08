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
    {ROUTES.map(({ Icon, label, path }) => (
      <NavItem href={path} onClick={onNavItemClick} icon={<Icon />} key={label}>
        {label}
      </NavItem>
    ))}
  </List>
);

export default NavItems;
