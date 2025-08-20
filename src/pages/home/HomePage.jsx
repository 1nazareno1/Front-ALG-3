import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserById } from '../../redux/slices/usersSlice'

export const HomePage = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const dispatch = useDispatch()

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
      ></Box>
    </Box>
  )
}
