import { Box, useMediaQuery, useTheme } from '@mui/material'
import { MainNavbar } from '../navbar/Barra horizontal/MainNavbar'
import { LateralNavbar } from '../navbar/Barra Lateral/LateralNavbar'

export const Interface = ({ children }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <MainNavbar />
      <Box display={'flex'}>
        <LateralNavbar />
        <Box
          marginLeft={isDesktop ? '78px' : '0px'}
          width={isDesktop ? 'calc(100vw - 78px)' : '100vw'}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
