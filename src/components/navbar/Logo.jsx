import { Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

export const Logo = ({ color = 'main' }) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Typography
      variant="h4"
      onClick={() => {
        if (location.pathname !== '/') navigate('/')
      }}
      sx={(theme) => ({
        color:
          color == 'main'
            ? theme.palette.primary.main
            : theme.palette.primary.light,
        cursor: location.pathname !== '/' ? 'pointer' : 'default',
        fontWeight: 700,
        userSelect: 'none',
      })}
    >
      LOGO
    </Typography>
  )
}