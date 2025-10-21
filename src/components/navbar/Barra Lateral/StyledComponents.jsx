import { Box, ButtonBase, styled } from "@mui/material";

export const StyledNavbar = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRight: `1px solid ${theme.palette.secondary.light}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "calc(100vh - 90px)",
  width: "78px",
  paddingTop: theme.spacing(2),
  marginTop: "90px",
  gap: theme.spacing(3),
  left: 0,
  padding: `${theme.spacing(3)} ${theme.spacing(0.5)}`,
  position: "absolute",
  top: 0,
  transition: "width 0.3s ease",
  zIndex: 1000,
  "&:hover .text": {
    display: "block",
    transitionDelay: "0.3s",
    transition: "display 0.3s ease",
  },
  "&:hover .button": {
    width: theme.spacing(27.125),
    transition: "width 0.3s ease",
  },
  "&:hover": {
    width: theme.spacing(31),
  },
}));

export const LinkButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "pathname" && prop !== "button",
})(({ button, theme, pathname, expandednavbar }) => ({
  alignItems: 'center',
  background: pathname.includes(button.link) ? 'rgba(4, 51, 147, .2)' : 'transparent',
  borderRadius: theme.spacing(1),
  color:
    pathname.includes(button.link)
      ? theme.palette.primary.main
      : theme.palette.common.dark,
  display: "flex",
  gap: theme.spacing(3),
  height: theme.spacing(6),
  justifyContent: expandednavbar ? "flex-start" : "center",
  padding: theme.spacing(1),
  width: theme.spacing(6),
  "&:hover": {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
