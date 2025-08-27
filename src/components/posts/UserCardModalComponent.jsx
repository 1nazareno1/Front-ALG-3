import { AdminPanelSettings, Close } from '@mui/icons-material'
import { Box, capitalize, Dialog, Tooltip, Typography } from '@mui/material'
import { processRegisterDate } from '../../utils/Commons'

export const UserCardModalComponent = ({
  career,
  likeCount,
  messageCount,
  open,
  postCount,
  registerDate,
  setOpen,
  title,
  username,
}) => {
  const registerDateStandarized = processRegisterDate(registerDate)

  return (
    <>
      <Typography
        sx={(theme) => ({
          cursor: 'pointer',
          width: 'fit-content',
          '&:hover': { color: theme.palette.primary.main, fontWeight: 600 },
        })}
        onClick={() => setOpen(true)}
      >
        {username}
      </Typography>
      <Dialog open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            height: 'fit-content',
            flexDirection: 'column',
            padding: theme.spacing(2),
            minWidth: '300px',
          })}
        >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography
              fontSize={20}
              sx={(theme) => ({
                color: theme.palette.common.black,
                cursor: 'pointer',
              })}
              fontWeight={600}
            >
              {username}
            </Typography>
            <Box onClick={() => setOpen(false)}>
              <Close sx={{ cursor: 'pointer' }} />
            </Box>
          </Box>
          <Box display={'flex'} my={1} gap={0.5} alignItems={'center'}>
            {title == 'ADMIN' || title == 'MODERADOR' ? (
              <Tooltip
                placement={'top'}
                title={`Este usuario es ${capitalize(title.toLowerCase())}`}
              >
                <AdminPanelSettings
                  sx={(theme) => ({
                    color: theme.palette.common.black,
                    height: '18px',
                    width: '18px',
                  })}
                />
              </Tooltip>
            ) : null}
            <Typography
              fontSize={12}
              sx={(theme) => ({ color: theme.palette.common.black })}
              fontWeight={500}
            >
              {capitalize(title.toLowerCase())}
            </Typography>
          </Box>
          <Typography
            fontSize={12}
            sx={(theme) => ({ color: theme.palette.common.black })}
          >
            Estudiando{' '}
            <Typography component={'span'} fontSize={12} fontWeight={600}>
              {career}
            </Typography>
          </Typography>
          <Typography
            fontSize={12}
            sx={(theme) => ({ color: theme.palette.common.black })}
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
              color: theme.palette.common.black,
              cursor: 'pointer',
            })}
          >
            {messageCount} mensajes
          </Typography>
          <Typography
            fontSize={12}
            sx={(theme) => ({ color: theme.palette.common.black })}
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
        </Box>
      </Dialog>
    </>
  )
}
