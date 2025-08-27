import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { UserCardComponent } from '../../components/posts/UserCardComponent'

export const HomePage = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box>
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          background: theme.palette.secondary.dark,
          display: 'flex',
          gap: theme.spacing(5),
          height: theme.spacing(20),
          justifyContent: 'center',
          width: isDesktop ? 'calc(100vw - 78px)' : '100vw',
        })}
      >
        {/* Botón que abre la página de registro */}
        <a href="/registrarse" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Registrarse
          </Button>
        </a>
      </Box>
    </Box>
  )
}
