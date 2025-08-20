import { AdminPanelSettings } from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'

export const UserCardComponent = ({
  career,
  likeCount,
  messageCount,
  postCount,
  registerDate,
  title,
  username,
}) => {
  const processRegisterDate = (registerDate) => {
    const day = String(registerDate.getDate()).padStart(2, '0')
    const month = String(registerDate.getMonth() + 1).padStart(2, '0')
    const year = String(registerDate.getFullYear())
    return `${day}-${month}-${year}`
  }

  const registerDateStandarized = processRegisterDate(registerDate)
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        width: '327px',
      })}
    >
      <Typography
        fontSize={20}
        sx={(theme) => ({ color: theme.palette.common.white })}
        fontWeight={600}
      >
        {username}
      </Typography>
      <Box display={'flex'} my={1} gap={0.5} alignItems={'center'}>
        {title == 'Administrador' || title == 'Moderador' ? (
          <Tooltip title={`Este usuario es ${title}`}>
            <AdminPanelSettings
              sx={(theme) => ({
                color: theme.palette.common.white,
                height: '18px',
                width: '18px',
              })}
            />
          </Tooltip>
        ) : null}
        <Typography
          fontSize={12}
          sx={(theme) => ({ color: theme.palette.common.white })}
          fontWeight={500}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        fontSize={12}
        sx={(theme) => ({ color: theme.palette.common.white })}
      >
        Estudiando{' '}
        <Typography component={'span'} fontSize={12} fontWeight={600}>
          {career}
        </Typography>
      </Typography>
      <Typography
        fontSize={12}
        sx={(theme) => ({ color: theme.palette.common.white })}
      >
        Registrado el{' '}
        <Typography component={'span'} fontSize={12} fontWeight={600}>
          {registerDateStandarized}
        </Typography>
      </Typography>
      <Typography
        mt={2}
        fontSize={12}
        sx={(theme) => ({ color: theme.palette.common.white })}
      >
        {messageCount} mensajes
      </Typography>
      <Typography
        fontSize={12}
        sx={(theme) => ({ color: theme.palette.common.white })}
      >
        <Typography component={'span'} fontSize={12} fontWeight={600}>
          {likeCount} agradecimientos
        </Typography>{' '}
        en{' '}
        <Typography component={'span'} fontSize={12} fontWeight={600}>
          {postCount} temas
        </Typography>
      </Typography>
    </Box>
  )
}
