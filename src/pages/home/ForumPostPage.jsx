import { useEffect, useState } from 'react'
import { ArrowBack, Message, ThumbUp } from '@mui/icons-material'
import { UserCardComponent } from '../../components/posts/UserCardComponent'
import { Box, CircularProgress, Typography } from '@mui/material'
import { getTimeAgoFromString } from '../../utils/Commons'
import { useWindowSize } from '../../hooks/useWindowSize'
import { UserCardModalComponent } from '../../components/posts/UserCardModalComponent'

export const ForumPostPage = () => {
  const [loading, setLoading] = useState(true)
  const [postData, setPostData] = useState({})
  const [userModalOpen, setUserModalOpen] = useState(false)
  const { upLg } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      setPostData({
        answers: 0,
        likes: 0,
        title: 'Nombre del tema',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nibh sem, cursus ac pellentesque vel, eleifend sit amet felis.
              Pellentesque porta ex arcu, eget viverra justo efficitur vel.
              Aliquam non tristique est, eu interdum ipsum. Curabitur vitae
              tellus sollicitudin nibh tempus lobortis. Donec blandit
              sollicitudin ex sit amet mollis. Curabitur ligula risus, finibus
              at justo vel, vulputate rutrum lectus. Sed interdum est id aliquet
              semper. 
              
              Quisque rhoncus pretium ipsum, in dapibus metus interdum
              non. Nullam convallis quis tortor at dictum. Duis mattis laoreet
              ipsum, sed venenatis sapien fermentum sit amet. Donec rutrum ipsum
              eget lectus condimentum, molestie aliquet turpis malesuada.
              Curabitur maximus venenatis arcu sed elementum. In nec sem
              pharetra, scelerisque justo non, aliquet felis. Suspendisse vel
              magna egestas, varius dolor ut, maximus ex. Duis dignissim nulla
              at blandit consequat. Mauris auctor, nisl eu suscipit porttitor,
              velit urna ullamcorper arcu, in suscipit mauris leo ut mauris.
              Vestibulum in lacinia odio. Nunc eu arcu in leo accumsan porta.
              Nulla facilisi. Donec quis ante est. Donec commodo feugiat
              fermentum.`,
        date: new Date('2025-06-17T03:24:00'),
      })
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing(3),
        margin: theme.spacing(3),
        [theme.breakpoints.down('lg')]: {
          gap: theme.spacing(2),
          margin: theme.spacing(2),
        },
      })}
    >
      <ArrowBack sx={{ cursor: 'pointer' }} />
      {loading ? (
        <Box sx={{ margin: '40vh auto 0px auto' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(3),
              minWidth: '55%',
            })}
          >
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
            <Typography>{postData.body}</Typography>
            <Box display={'flex'} gap={2}>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <ThumbUp sx={theme => ({ })} />
                <Typography>{postData.likes} agradecimientos</Typography>
              </Box>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <Message />
                <Typography>{postData.answers} comentarios</Typography>
              </Box>
            </Box>
          </Box>
          {upLg ? (
            <UserCardComponent
              career={'Tec. Sup. en Alimentos'}
              likeCount={4}
              messageCount={32}
              postCount={1}
              title={'Administrador'}
              username={'Beto'}
              registerDate={new Date()}
            />
          ) : null}
        </>
      )}
    </Box>
  )
}
