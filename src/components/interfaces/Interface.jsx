import { Box } from '@mui/material'
import { MainNavbar } from '../navbar/Barra horizontal/MainNavbar'
import { LateralNavbar } from '../navbar/Barra Lateral/LateralNavbar'

export const Interface = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <Box display={'flex'}>
        <LateralNavbar />
        {children}
      </Box>
    </>
  )
}
