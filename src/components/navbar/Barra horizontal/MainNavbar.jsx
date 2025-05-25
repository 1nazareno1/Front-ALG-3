import {
  Box,
  Divider,
  Drawer,
  useMediaQuery,
  useTheme,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { Menu, Search } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import React, { useState } from 'react'
import { Logo } from './Logo'
import LinkIcon from '@mui/icons-material/Link';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  // Simulaccion de Login
  const isLoggedIn = true
  const userName = 'BenJaminZapata'

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
                startAdornment: (
                  <Search sx={{ color: 'grey.500', mr: 1 }} />
                ),
              }}
            />
            <Typography component={"a"} href="/foro" sx={{ textDecoration: 'none' }}>
              Inicia sesión
            </Typography>
            <Typography component={"a"} href="/foro" sx={{ textDecoration: 'none' }}>
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
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box
          sx={(theme) => ({
            background: theme.palette.primary.main,
            width: '350px',
            height: '100vh',
            padding: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <Logo color="white" />
          <Divider
            sx={(theme) => ({
              background: theme.palette.primary.light,
              marginY: theme.spacing(3),
            })}
          />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Inicio" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Buscar" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Calendario" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Ir a ISETA" sx={{ color: 'white' }} />
            </ListItem>
          </List>
          
          <Box sx={{ marginTop: 'auto' }}>
            {isLoggedIn ? (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <AccountCircleIcon sx={{ color: 'white', fontSize: 40, bgcolor: 'green', borderRadius: '50%', p: 0.5 }} />
                  <Box>
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{userName}</Typography>
                    <Typography sx={{ color: 'white', fontSize: 14 }}>Mis mensajes</Typography>
                  </Box>
                </Box>
                <Divider
                  sx={(theme) => ({
                    background: theme.palette.primary.light,
                    marginY: theme.spacing(3),
                  })}
                />
                <ListItem button>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Cerrar sesión" sx={{ color: 'white' }} />
                </ListItem>
              </>
            ) : (
              
                  
              
              
              
              <ListItem button>
                
                <ListItemIcon>
                  <LoginIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Iniciar sesión" sx={{ color: 'white' }} />
              </ListItem>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}