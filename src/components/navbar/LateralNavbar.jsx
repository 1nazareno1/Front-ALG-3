import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const LateralNavbar = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  if (isDesktop) {
    return (
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.light,
          borderRight: `1px solid ${theme.palette.secondary.light}`,
          display: 'flex',
          height: 'calc(100vh - 90px)',
          padding: theme.spacing(3),
          width: '78px',
        })}
      ></Box>
    )
  } else return null
}
