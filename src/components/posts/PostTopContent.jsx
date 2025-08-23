import { Box, Tooltip, Typography } from '@mui/material'
import { Flag } from '@mui/icons-material'
import { UserCardModalComponent } from './UserCardModalComponent'
import { getTimeAgoFromString } from '../../utils/Commons'

export const PostTopContent = ({
  postData,
  setUserModalOpen,
  upLg,
  userModalOpen,
}) => {
  return (
    <>
      <Box>
        <Typography>{`General > Noticias • ${getTimeAgoFromString(
          postData.date
        )}`}</Typography>{' '}
        {!upLg ? (
          <UserCardModalComponent
            career={'Tec. Sup. en Alimentos'}
            likeCount={4}
            messageCount={32}
            open={userModalOpen}
            postCount={1}
            registerDate={new Date()}
            setOpen={setUserModalOpen}
            title={'Administrador'}
            username={'Beto'}
          />
        ) : null}
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          fontSize={'40px'}
          fontWeight={700}
          sx={(theme) => ({
            lineHeight: 1.1,
            [theme.breakpoints.down('lg')]: {
              lineHeight: 1,
              fontSize: '32px',
            },
          })}
        >
          {postData.title}
        </Typography>{' '}
        <Tooltip placement={'top'} title="Denunciar post">
          <Box
            sx={(theme) => ({
              cursor: 'pointer',
              transition: 'ease-in .1s',
              '&:hover': {
                color: theme.palette.error.main,
                marginBottom: theme.spacing(1),
              },
            })}
          >
            <Flag />
          </Box>
        </Tooltip>
      </Box>
    </>
  )
}
