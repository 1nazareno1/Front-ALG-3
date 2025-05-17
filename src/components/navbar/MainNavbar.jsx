import {
  Box,
  Divider,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import React, { useState } from 'react'
import { Logo } from './Logo'

//* Menu horizontal superior (logo, menu de hamburguesa)
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
          })}
        >
          <Logo color="white" />
          <Divider
            sx={(theme) => ({
              background: theme.palette.primary.light,
              marginY: theme.spacing(3),
            })}
          />
          <Divider
            sx={(theme) => ({
              background: theme.palette.primary.light,
              marginY: theme.spacing(3),
            })}
          />
        </Box>
      </Drawer>
    </>
  )
}
