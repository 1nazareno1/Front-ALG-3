import { createTheme } from '@mui/material/styles'

/* 
//* Creamos el tema de la aplicación - Esto incluye:
^ Breakpoints - tamaño de pantallas para diferentes dispositivos o resoluciones de pantalla
^ Paleta de colores - Colores utilizados a lo largo de la aplicación
*/

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: 375,
      md: 600,
      lg: 1024,
    },
  },
  palette: {
    type: 'light',
    error: {
      main: '#EE6055',
    },
    primary: {
      main: '#043AA9',
      light: '#FCFCFC',
      dark: '#0A100D',
    },
    secondary: {
      main: '#0168AD',
      light: '#F0F0F0',
      dark: '#AAAAAA',
    },
    success: {
      main: '#AAF683',
    },
    warning: {
      main: '#FFDC5E',
    },
  },
})
