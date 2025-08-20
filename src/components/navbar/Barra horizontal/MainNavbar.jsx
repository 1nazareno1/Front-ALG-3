//? Importes de React
import { useState } from 'react'
//? Importes de Terceros
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
//? Importes propios
import { Logo } from './Logo'
import { Menu, Search } from '@mui/icons-material'

import { MobileNavbar } from './MobileNavbar'

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          background: theme.palette.primary.light,
          borderBottom: `1px solid ${theme.palette.secondary.light}`,
          display: 'flex',
          height: '90px',
          justifyContent: 'space-between',
          padding: theme.spacing(3),
        })}
      >
        <Logo />
        {isDesktop && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              size="small"
              placeholder="Buscar..."
              variant="outlined"
              sx={{ background: 'white', borderRadius: 1 }}
              InputProps={{
                startAdornment: <Search sx={{ color: 'grey.500', mr: 1 }} />,
              }}
            />
            <Typography
              component={'a'}
              href="/foro"
              sx={{ textDecoration: 'none', userSelect: 'none' }}
            >
              Inicia sesión
            </Typography>
            <Typography
              component={'a'}
              href="/foro"
              sx={{ textDecoration: 'none', userSelect: 'none' }}
            >
              ¿Nuevo? Registrarse
            </Typography>
          </Box>
        )}
        {!isDesktop ? (
          <Box onClick={() => setMenuOpen(!menuOpen)}>
            <Menu color="primary" fontSize={'medium'} />
          </Box>
        ) : null}
      </Box>
      <MobileNavbar menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
