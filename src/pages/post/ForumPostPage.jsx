import { ArrowBack, ThumbUp } from '@mui/icons-material'
import { Box, CircularProgress, Typography } from '@mui/material'
import { PostTopContent } from '../../components/posts/PostTopContent'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserCardComponent } from '../../components/posts/UserCardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useWindowSize } from '../../hooks/useWindowSize'
import { getUserById, setSearchedUser } from '../../redux/slices/usersSlice'
import { toast } from 'sonner'
import { PostBodyContent } from '../../components/posts/PostBodyContent'
import { ReportModal } from '../../components/modals/ReportModal'

export const ForumPostPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location
  const [loading, setLoading] = useState(true)
  const [postData, setPostData] = useState({})
  const [userModalOpen, setUserModalOpen] = useState(false)
  const [userLike, setUserLike] = useState(false)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const { userID } = useSelector((state) => state.auth)
  const { users, searchedUser } = useSelector((state) => state.usuarios)
  const { upLg } = useWindowSize()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!state) {
      return navigate('/')
    }
    if (state.id_creador) {
      if (users.length > 0) {
        const user = users.find((u) => u.id == state.id_creador)
        dispatch(setSearchedUser(user))
      } else {
        async function fetchUserData() {
          await dispatch(getUserById(state.id_creador))
        }
        fetchUserData()
      }
    }

    const userLikes = Math.random() < 0.5 ? [1, 2, 3, 4, 5] : []
    setPostData({
      ...state,
      likes: userLikes,
    })

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (postData.likes && postData.likes.includes(userID)) {
      setUserLike(true)
    }
  }, [userID, postData])

  const handleUserLike = () => {
    if (!userID) {
      toast.error('Debes estar logueado para dar me gusta')
      return
    }
    if (userLike) {
      const newLikes = postData.likes.filter((like) => like !== userID)
      setPostData({
        ...postData,
        likes: newLikes,
      })
      toast.success('Has dado me gusta a este post')
    } else {
      const newLikes = [...postData.likes, userID]
      setPostData({
        ...postData,
        likes: newLikes,
      })
    }
    setUserLike(!userLike)
  }

  const handleReportModal = () => {
    if (!userID) {
      toast.error('Debes estar logueado para reportar un post')
      return
    } else setReportModalOpen(true)
  }

  const handleReport = () => {
    toast.success('Se ha reportado el post con exito')
    setReportModalOpen(false)
  }

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
      <Box onClick={() => navigate(-1)} sx={{ cursor: 'pointer' }}>
        <ArrowBack
          sx={(theme) => ({ '&:hover': { color: theme.palette.primary.main } })}
        />
      </Box>
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
              handleReport={handleReportModal}
              postData={postData}
              setUserModalOpen={setUserModalOpen}
              upLg={upLg}
              userModalOpen={userModalOpen}
              userData={searchedUser}
            />
            <PostBodyContent
              handleUserLike={handleUserLike}
              postData={postData}
              userLike={userLike}
            />
          </Box>
          {upLg && searchedUser ? (
            <UserCardComponent
              career={'Tec. Sup. en Alimentos'}
              likeCount={4}
              messageCount={32}
              postCount={1}
              title={searchedUser.rol}
              username={searchedUser.nombre_apellido}
              registerDate={searchedUser.createdAt}
            />
          ) : null}
        </>
      )}
      <ReportModal
        handleReport={handleReport}
        open={reportModalOpen}
        postTitle={postData.titulo}
        setOpen={setReportModalOpen}
      />
    </Box>
  )
}
