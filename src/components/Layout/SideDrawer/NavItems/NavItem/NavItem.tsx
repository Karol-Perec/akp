import { MouseEventHandler, ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
// import { useMatch, Link as RouterLink } from 'react-router-dom';

interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  href: string;
  onClick: MouseEventHandler;
}

const NavItem = ({ children, icon, href, onClick }: NavItemProps) => {
  // const match = useMatch(to);

  return (
    <li>
      {/* onClick={onClick} */}
      {/* selected={!!match} */}
      <Link href={href} passHref>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{children}</ListItemText>
        </ListItemButton>
      </Link>
    </li>
  );
};

export default NavItem;
