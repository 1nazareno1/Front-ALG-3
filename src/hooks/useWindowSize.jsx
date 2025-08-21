import { useMediaQuery, useTheme } from '@mui/material'

export const useWindowSize = () => {
  const theme = useTheme()
  const upLg = useMediaQuery(theme.breakpoints.up('lg'))
  const upSm = useMediaQuery(theme.breakpoints.up('sm'))

  return {
    upLg,
  }
}
