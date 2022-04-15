import { styled } from "@mui/material";

export const Main = styled("main")(({ theme }) => ({
  minHeight: "calc(100% - 56px)",
  paddingTop: theme.spacing(2),
  background: [
    "radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(/archive-g9a9eea1fd_1920.jpg) no-repeat center",
  ],
  [theme.breakpoints.up("sm")]: {
    minHeight: "calc(100% - 64px)",
  },
  display: 'flex',
  flexDirection: 'column'
}));

export const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.background.default,
}));

export const MainContentContainer = styled("div")(({ theme }) => ({
  width: '100%',
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: theme.palette.common.white,
}));
