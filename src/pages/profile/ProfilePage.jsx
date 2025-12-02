import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserById } from "../../redux/slices/usersSlice";
import { getPosts } from "../../redux/slices/postsSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import EditIcon from "@mui/icons-material/Edit";

export const ProfilePage = () => {
  const { searchedUser, status } = useSelector((state) => state.usuarios);
  const [userPosts, setUserPosts] = React.useState([]);
  const { downMd } = useWindowSize();
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
            return navigate("/inicio");
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
            return navigate("/inicio");
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
      {status === "succesful" && searchedUser ? (
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
                {searchedUser?.email|| "Email no proporcionado"}
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={500}>Fecha de registro</Typography>
              <Typography
                maxWidth={"250px"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                {getRegistrationDate(searchedUser?.createdAt)}
              </Typography>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
          <Box display={"flex"} flexDirection={"column"} gap={2} width={"70%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h4" fontWeight={700}>
                {searchedUser.nombre_apellido || "Nombre de usuario"}
              </Typography>
              <Button variant="contained" startIcon={<EditIcon />}>
                Editar perfil
              </Button>
            </Box>
            <Divider flexItem sx={{ mb: 1 }} />
            {/* Posts del usuario */}
            <Box>
              <Box
                sx={(theme) => ({
                  border: `1px solid ${theme.palette.background.paper}`,
                })}
              >
                <Box
                  sx={(theme) => ({
                    backgroundColor: theme.palette.primary.main,
                    borderTopLeftRadius: downMd
                      ? theme.spacing(0)
                      : theme.spacing(1),
                    borderTopRightRadius: downMd
                      ? theme.spacing(0)
                      : theme.spacing(1),
                    color: theme.palette.primary.contrastText,
                    height: "40px",
                    padding: theme.spacing(1.25),
                    width: "100%",
                  })}
                >
                  <Typography fontSize={"14px"}>Posts del usuario</Typography>
                </Box>
                {userPosts.length > 0 ? (
                  userPosts.map((post, index) => (
                    <Box key={post.id} width={"100%"}>
                      <Box
                        p={1}
                        height={"64px"}
                        sx={(theme) => ({
                          display: "flex",
                          flexDirection: "column",
                          paddingTop: theme.spacing(1.5),
                          paddingInline: theme.spacing(1.5),
                          backgroundColor:
                            index % 2 == 0
                              ? theme.palette.secondary.light
                              : theme.palette.secondary.dark,
                          borderBottomLeftRadius:
                            index == userPosts.length - 1 ? 8 : 0,
                          borderBottomRightRadius:
                            index == userPosts.length - 1 ? 8 : 0,
                        })}
                      >
                        {" "}
                        <Typography fontWeight={500}>{post.titulo}</Typography>
                        <Typography fontSize={14} color="text.secondary">
                          {new Date(post.createdAt).toLocaleDateString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={(theme) => ({
                      background: theme.palette.primary.light,
                      borderBottomLeftRadius: theme.spacing(1),
                      borderBottomRightRadius: theme.spacing(1),
                    })}
                  >
                    <Typography p={2}>
                      El usuario no tiene posts creados
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            {/* Información academica / cv */}
            <Box>
              <Box
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  borderTopLeftRadius: downMd
                    ? theme.spacing(0)
                    : theme.spacing(1),
                  borderTopRightRadius: downMd
                    ? theme.spacing(0)
                    : theme.spacing(1),
                  color: theme.palette.primary.contrastText,
                  height: "40px",
                  padding: theme.spacing(1.25),
                  width: "100%",
                })}
              >
                <Typography fontSize={"14px"}>Información académica</Typography>
              </Box>
              <Box
                p={1}
                sx={(theme) => ({
                  display: "flex",
                  gap: 1.5,
                  flexDirection: "column",
                  paddingTop: theme.spacing(1.5),
                  paddingInline: theme.spacing(1.5),
                  backgroundColor: theme.palette.secondary.light,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                })}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={"14px"} fontWeight={500}>
                    ¿Es alúmno de ISETA?
                  </Typography>
                  <Typography fontSize={"14px"}>Sí/No</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={"14px"} fontWeight={500}>
                    Carrera
                  </Typography>
                  <Typography fontSize={"14px"}>
                    Analisis de sistemas
                  </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={"14px"} fontWeight={500}>
                    Estado de la carrera
                  </Typography>
                  <Typography fontSize={"14px"}>
                    En curso/Recibido/Desertor
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Información academica / cv */}
            <Box>
              <Box
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  borderTopLeftRadius: downMd
                    ? theme.spacing(0)
                    : theme.spacing(1),
                  borderTopRightRadius: downMd
                    ? theme.spacing(0)
                    : theme.spacing(1),
                  color: theme.palette.primary.contrastText,
                  height: "40px",
                  padding: theme.spacing(1.25),
                  width: "100%",
                })}
              >
                <Typography fontSize={"14px"}>Información académica</Typography>
              </Box>
              <Box
                p={1}
                sx={(theme) => ({
                  display: "flex",
                  gap: 1.5,
                  flexDirection: "column",
                  paddingTop: theme.spacing(1.5),
                  paddingInline: theme.spacing(1.5),
                  backgroundColor: theme.palette.secondary.light,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                })}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={"14px"} fontWeight={500}>
                    ¿Es alúmno de ISETA?
                  </Typography>
                  <Typography fontSize={"14px"}>Sí/No</Typography>
                </Box>
              </Box>
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
