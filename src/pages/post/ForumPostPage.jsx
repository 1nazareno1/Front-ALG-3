import { ArrowBack, ThumbUp } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { PostTopContent } from "../../components/posts/PostTopContent";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserCardComponent } from "../../components/posts/UserCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getUserById } from "../../redux/slices/usersSlice";
import { toast } from "sonner";

export const ForumPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [userLike, setUserLike] = useState(false);
  const { userID } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.usuarios);
  const { upLg } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) {
      return navigate("/");
    }
    if (state.id_creador) {
      async function fetchUserData() {
        await dispatch(getUserById(state.id_creador));
      }
      fetchUserData();
    }
    const userLikes = Math.random() < 0.5 ? [1, 2, 3, 4, 5] : [];
    setPostData({
      ...state,
      likes: userLikes,
    });

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postData.likes && postData.likes.includes(userID)) {
      setUserLike(true);
    }
  }, [userID, postData]);

  const handleUserLike = () => {
    if (!userID) {
      toast.error("Debes estar logueado para dar un agradecimiento");
      return;
    }
    if (userLike) {
      const newLikes = postData.likes.filter((like) => like !== userID);
      setPostData({
        ...postData,
        likes: newLikes,
      });
    } else {
      const newLikes = [...postData.likes, userID];
      setPostData({
        ...postData,
        likes: newLikes,
      });
    }
    setUserLike(!userLike);
  };

  const handleReport = () => {
    if (!userID) {
      toast.error("Debes estar logueado para dar reportar un post");
      return;
    }
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(3),
        margin: theme.spacing(3),
        [theme.breakpoints.down("lg")]: {
          gap: theme.spacing(2),
          margin: theme.spacing(2),
          marginRight: theme.spacing(4),
        },
      })}
    >
      <Box onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
        <ArrowBack
          sx={(theme) => ({ "&:hover": { color: theme.palette.primary.main } })}
        />
      </Box>
      {loading ? (
        <Box sx={{ margin: "40vh auto 0px auto" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(3),
              minWidth: "55%",
            })}
          >
            <PostTopContent
              postData={postData}
              setUserModalOpen={setUserModalOpen}
              upLg={upLg}
              userModalOpen={userModalOpen}
              handleReport={handleReport}
            />
            <Typography>{postData.contenido}</Typography>
            <Box display={"flex"} gap={2}>
              <Box
                display={"flex"}
                gap={1}
                alignItems={"center"}
                onClick={() => handleUserLike()}
              >
                <ThumbUp
                  sx={(theme) => ({
                    color: userLike
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark,
                    cursor: "pointer",
                    transition: "ease-in-out 0.15s",
                    "&:hover": {
                      color: userLike
                        ? theme.palette.error.dark
                        : theme.palette.primary.main,
                      transform: "translateY(-2.5px)",
                    },
                  })}
                />
                <Typography>{postData.likes.length} agradecimientos</Typography>
              </Box>
            </Box>
          </Box>
          {upLg && user ? (
            <UserCardComponent
              career={"Tec. Sup. en Alimentos"}
              likeCount={4}
              messageCount={32}
              postCount={1}
              title={user.rol}
              username={user.nombre_apellido}
              registerDate={user.createdAt}
            />
          ) : null}
        </>
      )}
    </Box>
  );
};
