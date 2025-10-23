import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserById } from "../../redux/slices/usersSlice";
import { getPosts } from "../../redux/slices/postsSlice";

export const ProfilePage = () => {
  const { searchedUser, status } = useSelector((state) => state.usuarios);
  const [userPosts, setUserPosts] = React.useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split("/perfil/")[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchedUser || searchedUser.id != userId) {
          const userAction = await dispatch(getUserById(userId));
          if (!userAction.payload) {
            return navigate("/");
          }
        }
      } catch (error) {
        console.error("Ocurrió un error al cargar los datos:", error);
        navigate("/");
      }
    };
    fetchData();
  }, [searchedUser, userId, navigate]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        if (searchedUser && searchedUser.id == userId) {
          const postAction = await dispatch(getPosts());
          if (!postAction.payload) {
            return navigate("/");
          }
          const filteredPosts = postAction.payload.filter(
            (post) => post.id_autor == searchedUser.id
          );
          setUserPosts(filteredPosts);
        }
      } catch (error) {
        console.error("Ocurrió un error al cargar los datos del post:", error);
      }
    };
    fetchPostData();
  }, [searchedUser]);

  const getRegistrationDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) + ` (${date.toLocaleTimeString("es-ES")})`
    );
  };

  return (
    <>
      {status === "succesfull" ? (
        <Box display={"flex"} height={"80dvh"} p={3}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <img src="/profilePicture.png" width={250} />
            <Typography fontWeight={500}>Información del usuario</Typography>
            <Box>
              <Typography fontWeight={500}>Email</Typography>
              <Typography
                maxWidth={"250px"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                {searchedUser.email || "Email no proporcionado"}
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={500}>Fecha de registro</Typography>
              <Typography
                maxWidth={"250px"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                {getRegistrationDate(searchedUser.createdAt)}
              </Typography>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Box>
              <Typography variant="h4" fontWeight={700} mb={1}>
                {searchedUser.nombre_apellido || "Nombre de usuario"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600} mb={1}>
                Posts del usuario
              </Typography>
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <Box key={post.id} mb={2}>
                    <Typography fontWeight={500}>{post.titulo}</Typography>
                    <Typography fontSize={14} color="text.secondary">
                      {new Date(post.createdAt).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))
              ) : (
                <Typography>No hay posts para mostrar.</Typography>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box display={"flex"}>
          <CircularProgress sx={{ margin: "40vh auto 0px auto" }} />
        </Box>
      )}
    </>
  );
};
