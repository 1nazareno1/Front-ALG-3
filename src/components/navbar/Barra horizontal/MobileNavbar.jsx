import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material'
import { AccountCircle, Login, Logout } from '@mui/icons-material'
import { Logo } from './Logo'
import { MenuLinks } from '../../../utils/Commons'
import { MenuMobileLinkComponent } from './MenuMobileLinkComponent'



export const MobileNavbar = ({ menuOpen, onClose }) => {
  // Simulacion de Login
  const isLoggedIn = true
  const userName = 'Bnegra cabeza'

  return (
    <Drawer open={menuOpen} onClose={onClose}>
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
          {MenuLinks.map((button) => {
            if (button.logged && !isLoggedIn) return null
            return (
              <MenuMobileLinkComponent
                key={`${button.title}-mobile`}
                icon={button.icon}
                text={button.title}
                link={button.link}
              />
            )
          })}
        </List>

        <Box sx={{ marginTop: 'auto' }}>
          {isLoggedIn ? (
            <>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
              >
                <AccountCircle
                  sx={{
                    color: 'white',
                    fontSize: 48,
                    bgcolor: 'green',
                    borderRadius: '50%',
                    p: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    sx={(theme) => ({
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: theme.spacing(2.5),
                      marginBottom: theme.spacing(0.5),
                    })}
                  >
                    {userName}
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      color: 'white',
                      fontSize: theme.spacing(2),
                    })}
                  >
                    Mis mensajes
                  </Typography>
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
                  <Logout sx={{ color: 'white' }} />
                </ListItemIcon>
                <Typography
                  sx={(theme) => ({
                    color: 'white',
                    fontSize: theme.spacing(3),
                    userSelect: 'none',
                  })}
                >
                  Cerrar sesión
                </Typography>
              </ListItem>
            </>
          ) : (
            <>
              <Divider
                sx={(theme) => ({
                  background: theme.palette.primary.light,
                  marginY: theme.spacing(3),
                })}
              />
              <ListItem button>
                <ListItemIcon>
                  <Login sx={{ color: 'white' }} />
                </ListItemIcon>
                <Typography
                  sx={(theme) => ({
                    color: 'white',
                    fontSize: theme.spacing(3),
                    userSelect: 'none',
                  })}
                >
                  Iniciar sesión
                </Typography>
              </ListItem>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  )
}
