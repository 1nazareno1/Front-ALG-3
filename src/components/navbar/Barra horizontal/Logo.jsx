import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

export const Logo = ({ color = 'main' }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: location.pathname !== '/' ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none',
        outline: 'none',
        '&:focus-visible': {
          outline: '2px solid', // Accesibilidad: se ve al usar tabulador
        },
      }}
      role="button"
      tabIndex={0} // para que sea accesible por teclado
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick()
      }}
    >
      <Box
        onClick={() => navigate('/')}
        component="img"
        src="vite.svg" // 🔁 Reemplazá con tu logo real
        alt="Logo"
        sx={{
          height: 40,
        }}
      />
      <Typography
        onClick={() => navigate('/')}
        variant="h4"
        sx={(theme) => ({
          color:
            color === 'main'
              ? theme.palette.primary.main
              : theme.palette.primary.light,
          fontWeight: 700,
        })}
      >
        IZnianos
      </Typography>
    </Box>
  )
}

