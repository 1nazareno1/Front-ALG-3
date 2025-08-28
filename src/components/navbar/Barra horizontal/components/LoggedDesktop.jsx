import { Box, Tooltip, Typography } from '@mui/material'
import { logout } from '../../../../redux/slices/authSlice'
import { Logout, NotificationImportant } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { NotificationsMenu } from './NotificationsMenu';
import React, { useState } from 'react';

export const LoggedDesktop = ({ username }) => {
  const dispatch = useDispatch()
  const [notificaciones] = useState([
    {id: 1, mensaje: "tienes una nueva respuesta"},
    {id: 2, mensaje: "Tu post fue Bloqueado"}
  ])

  return (
    <Box display={'flex'} gap={3}>
      <Typography color="primary">
        Hola{' '}
        <Typography component={'span'} fontWeight={500}>
          {username}
        </Typography>
      </Typography>
      
      <NotificationsMenu notificaciones={notificaciones} />
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
