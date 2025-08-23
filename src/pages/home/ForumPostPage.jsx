import { ArrowBack, Message, ThumbUp } from '@mui/icons-material'
import { Box, CircularProgress, Typography } from '@mui/material'
import { PostTopContent } from '../../components/posts/PostTopContent'
import { useEffect, useState } from 'react'
import { UserCardComponent } from '../../components/posts/UserCardComponent'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useSelector } from 'react-redux'

export const ForumPostPage = () => {
  const [loading, setLoading] = useState(true)
  const [postData, setPostData] = useState({})
  const [userModalOpen, setUserModalOpen] = useState(false)
  const [userLike, setUserLike] = useState(false)
  const { userID: id } = useSelector((state) => state.auth)
  const { upLg } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      const userLiked = Math.random() < 0.5 ? [1] : []
      setPostData({
        answers: 0,
        likes: userLiked,
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

  useEffect(() => {
    if (postData.likes && postData.likes.includes(id)) {
      setUserLike(true)
    }
  }, [id, postData])

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing(3),
        margin: theme.spacing(3),
        [theme.breakpoints.down('lg')]: {
          gap: theme.spacing(2),
          margin: theme.spacing(2),
          marginRight: theme.spacing(4),
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
            <PostTopContent
              postData={postData}
              setUserModalOpen={setUserModalOpen}
              upLg={upLg}
              userModalOpen={userModalOpen}
            />
            <Typography>{postData.body}</Typography>
            <Box display={'flex'} gap={2}>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <ThumbUp
                  sx={(theme) => ({
                    color: userLike
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark,
                  })}
                />
                <Typography>{postData.likes.length} agradecimientos</Typography>
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
