import { Box, useMediaQuery, useTheme } from '@mui/material'
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
      ></Box>
    </Box>
  )
}
