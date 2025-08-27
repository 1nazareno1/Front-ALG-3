import { Box, Tooltip, Typography } from '@mui/material'
import { logout } from '../../../../redux/slices/authSlice'
import { Logout, NotificationImportant } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

export const LoggedDesktop = ({ username }) => {
  const dispatch = useDispatch()

  return (
    <Box display={'flex'} gap={3}>
      <Typography color="primary">
        Hola{' '}
        <Typography component={'span'} fontWeight={500}>
          {username}
        </Typography>
      </Typography>
      <NotificationImportant color="primary" sx={{ cursor: 'pointer' }} />
      <Tooltip title="Cerrar sesión" placement="top">
        <Box
          onClick={() => {
            dispatch(logout())
          }}
        >
          <Logout color="primary" sx={{ cursor: 'pointer' }} />
        </Box>
      </Tooltip>
    </Box>
  )
}
