//? Importes de React
import { useState } from 'react'
//? Importes de Terceros
import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
//? Importes propios
import { Logo } from './Logo'
import {
  Logout,
  Menu,
  NotificationImportant,
  Search,
} from '@mui/icons-material'
import LoginModal from '../../modals/LoginModal'
import { MobileNavbar } from './MobileNavbar'
import { useSelector } from 'react-redux'

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setLoginOpen] = useState(false)
  const { isLogged, username } = useSelector((state) => state.auth)
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
        {isDesktop ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: isLogged ? 7 : 2,
            }}
          >
            <TextField
              size="small"
              placeholder="Buscar..."
              variant="outlined"
              sx={{ background: 'white', borderRadius: 1 }}
              InputProps={{
                startAdornment: <Search sx={{ color: 'grey.500', mr: 1 }} />,
              }}
            />
            {isLogged ? (
              <Box display={'flex'} gap={3}>
                <Typography color="primary">
                  Hola{' '}
                  <Typography component={'span'} fontWeight={500}>
                    {username}
                  </Typography>
                </Typography>
                <NotificationImportant
                  color="primary"
                  sx={{ cursor: 'pointer' }}
                />
                <Logout color="primary" sx={{ cursor: 'pointer' }} />
              </Box>
            ) : (
              <>
                <Typography
                  component="button"
                  onClick={() => setLoginOpen(true)}
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    color: 'blue',
                    front: 'inherit',
                    padding: 0,
                  }}
                >
                  Inicia sesión
                </Typography>
                <LoginModal
                  open={modalOpen}
                  onClose={() => setLoginOpen(false)}
                />
                <Typography
                  component={'a'}
                  href="/foro"
                  sx={{ textDecoration: 'none', userSelect: 'none' }}
                >
                  ¿Nuevo? Registrarse
                </Typography>
              </>
            )}
          </Box>
        ) : null}
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
