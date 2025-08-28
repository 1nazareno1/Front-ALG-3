import { Typography } from '@mui/material'
import { LoginModal } from '../../../modals/LoginModal'

export const NotLoggedDesktop = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Typography
        component="button"
        onClick={() => setModalOpen(true)}
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          color: 'blue',
          front: 'inherit',
          padding: 0,
        }}
      >
        Inicia sesión
      </Typography>
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Typography
        component={'a'}
        href="/registro"
        sx={{ textDecoration: 'none', userSelect: 'none' }}
      >
        ¿Nuevo? Registrarse
      </Typography>
    </>
  )
}
