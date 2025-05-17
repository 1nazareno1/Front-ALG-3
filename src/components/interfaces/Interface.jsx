import { Box } from '@mui/material'
import { MainNavbar } from '../navbar/MainNavbar'
import { LateralNavbar } from '../navbar/LateralNavbar'

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
