import { styled, alpha, AppBar, Button } from "@mui/material";

export const TopBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(12px)",
  backgroundColor: alpha(
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.primary.main,
    0.8
  ),
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
