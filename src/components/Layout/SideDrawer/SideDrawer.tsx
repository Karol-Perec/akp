import { Divider, Drawer } from "@mui/material";
import Link from "next/link";
import { MouseEventHandler } from "react";
import NavItems from "./NavItems/NavItems";
import * as S from "./SideDrawer.styles";

interface SideDrawerProps {
  open: boolean;
  handleToggleSideDrawer: MouseEventHandler;
}

const SideDrawer = ({ open, handleToggleSideDrawer }: SideDrawerProps) => (
  <Drawer open={open} onClose={handleToggleSideDrawer}>
    <S.DrawerHeader>
      {/* onClick={handleToggleSideDrawer} */}
      <Link href={"/"}>LOGO</Link>
    </S.DrawerHeader>
    <Divider />
    <S.NavContainer>
      <NavItems onNavItemClick={handleToggleSideDrawer} />
    </S.NavContainer>
    <Divider />
  </Drawer>
);

export default SideDrawer;
