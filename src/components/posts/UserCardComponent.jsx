import { AdminPanelSettings } from '@mui/icons-material'
import {
  Box,
  capitalize,
  CircularProgress,
  Tooltip,
  Typography,
} from '@mui/material'
import { processRegisterDate } from '../../utils/Commons'

export const UserCardComponent = ({
  career,
  likeCount,
  messageCount,
  postCount,
  registerDate,
  title,
  username,
}) => {
  const registerDateStandarized = processRegisterDate(registerDate)

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1),
        display: 'flex',
        height: 'fit-content',
        flexDirection: 'column',
        padding: theme.spacing(2),
        minWidth: '327px',
      })}
    >
      {username ? (
        <>
          <Typography
            fontSize={20}
            sx={(theme) => ({
              color: theme.palette.common.white,
              cursor: 'pointer',
            })}
            fontWeight={600}
          >
            {username}
          </Typography>
          <Box display={'flex'} my={1} gap={0.5} alignItems={'center'}>
            {title == 'ADMIN' || title == 'MODERADOR' ? (
              <Tooltip
                placement={'top'}
                title={`Este usuario es ${capitalize(title.toLowerCase())}`}
              >
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
              {capitalize(title.toLowerCase())}
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
            sx={(theme) => ({
              color: theme.palette.common.white,
              cursor: 'pointer',
            })}
          >
            {messageCount} mensajes
          </Typography>
          <Typography
            fontSize={12}
            sx={(theme) => ({ color: theme.palette.common.white })}
          >
            <Typography
              component={'span'}
              fontSize={12}
              fontWeight={600}
              sx={{ cursor: 'pointer' }}
            >
              {likeCount} me gustas
            </Typography>{' '}
            en{' '}
            <Typography
              component={'span'}
              fontSize={12}
              fontWeight={600}
              sx={{ cursor: 'pointer' }}
            >
              {postCount} temas
            </Typography>
          </Typography>
        </>
      ) : (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          minHeight={'152px'}
        >
          <CircularProgress size={40} sx={{ color: 'white' }} />
        </Box>
      )}
    </Box>
  )
}
