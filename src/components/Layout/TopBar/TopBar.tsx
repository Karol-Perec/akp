import { Menu as MenuIcon } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import { MouseEventHandler } from "react";
import * as S from "./TopBar.styles";
import Link from "next/link";
import ROUTES from "../../../Routes";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

interface TopBarProps {
  onDrawerToggleClick: MouseEventHandler<HTMLButtonElement>;
}

const TopBar = ({ onDrawerToggleClick }: TopBarProps) => {
  // const location = useLocation();
  // const routeMatch = matchRoutes(
  //   [{ path: "/" }, { path: "/hity" }, { path: "/mikroblog" }],
  //   location
  // );

  return (
    <S.TopBar>
      <Container>
        <Toolbar disableGutters>
          {/* <S.Logo /> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={onDrawerToggleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              color: "white",
            }}
          >
            {ROUTES.map(({ path, label }) => (
              <Link key={path} href={path} passHref>
                <Button color="inherit">{label}</Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggler />
          </Box>
        </Toolbar>
      </Container>
    </S.TopBar>
  );
};

export default TopBar;
