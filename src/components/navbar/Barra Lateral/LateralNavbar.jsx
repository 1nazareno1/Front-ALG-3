import React from 'react'
import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'

export const LateralNavbar = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const navigate = useNavigate()

  if (!isDesktop) return null

  return (
    <Box
      sx={{
        background: theme.palette.primary.light,
        borderRight: `1px solid ${theme.palette.secondary.light}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 90px)',
        width: '78px',
        paddingTop: theme.spacing(2),
        gap: theme.spacing(3),
      }}
    >
      <Stack spacing={3} alignItems="center">
        <IconButton onClick={() => navigate('/')}>
          <HomeIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => navigate('/buscar')}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => navigate('/temas')}>
          <CalendarTodayIcon />
        </IconButton>
        <IconButton onClick={() => navigate('/perfil')}>
          <PersonIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}
