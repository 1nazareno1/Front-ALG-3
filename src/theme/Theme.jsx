import { createTheme } from "@mui/material/styles";

/* 
//* Creamos el tema de la aplicación - Esto incluye:
^ Breakpoints - tamaño de pantallas para diferentes dispositivos o resoluciones de pantalla
^ Paleta de colores - Colores utilizados a lo largo de la aplicación
*/

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#00297aff",
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: "#E0E0E0",
            color: "#A0A0A0",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      sm: 375,
      md: 600,
      lg: 1024,
    },
  },
  palette: {
    type: "light",
    common: {
      black: "#0A100D",
      white: "#FCFCFC",
    },
    error: {
      main: "#eb483cff",
    },
    primary: {
      main: "#043AA9",
      light: "#FCFCFC",
      dark: "#033494ff",
    },
    secondary: {
      main: "#1987D0",
      light: "#F0F0F0",
      dark: "#AAAAAA",
    },
    success: {
      main: "#AAF683",
    },
    warning: {
      main: "#FFDC5E",
    },
  },
});
