import {
  Add,
  ChevronLeft,
  LockOutlined,
  PushPinOutlined,
} from "@mui/icons-material";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CreateButton } from "../commons/CreateButton";

export const ForumPosts = ({ posts, postsStatus, users }) => {
  const { downMd } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogged } = useSelector((state) => state.auth);

  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.spacing(1),
        width: "100%",
        maxWidth: "850px",
      })}
    >
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          onClick={() => navigate("/inicio")}
          sx={(theme) => ({
            cursor: "pointer",
            color: theme.palette.text.primary,
            "&:hover": { color: theme.palette.primary.dark },
            "&:hover .MuiTypography-root": { textDecoration: "underline" },
          })}
        >
          <ChevronLeft />
          <Typography component={"span"} fontSize={14} fontWeight={500}>
            Volver al foro
          </Typography>
        </Box>
        {isLogged && (
          <CreateButton
            disabled={postsStatus !== "succesful"}
            onClick={() => {
              navigate("/crear-post", {
                state: { forumId: location.pathname.split("/")[2] },
              });
            }}
            text="Crear post"
          />
        )}
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          borderTopLeftRadius: downMd ? theme.spacing(0) : theme.spacing(1),
          borderTopRightRadius: downMd ? theme.spacing(0) : theme.spacing(1),
          color: theme.palette.primary.contrastText,
          height: "40px",
          padding: theme.spacing(1.25),
          width: "100%",
        })}
      >
        <Typography>General</Typography>
      </Box>
      <Box display={"flex"}>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            borderBottomLeftRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            borderBottomRightRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            height: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            paddingInline: theme.spacing(1),
            width: downMd ? "40%" : "60%",
          })}
        >
          <Typography fontSize={10} color="primary.contrastText">
            Temas
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            borderBottomLeftRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            borderBottomRightRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            height: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingInline: theme.spacing(1),
            width: downMd ? "30%" : "20%",
          })}
        >
          <Typography fontSize={10} color="primary.contrastText">
            Me gustas
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            borderBottomLeftRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            borderBottomRightRadius: downMd
              ? theme.spacing(0)
              : theme.spacing(1),
            height: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingInline: theme.spacing(1),
            width: downMd ? "30%" : "20%",
          })}
        >
          <Typography fontSize={10} color="primary.contrastText">
            Fecha de creación
          </Typography>
        </Box>
      </Box>
      {posts.length == 0 ? (
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          p={3}
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.primary.light,
            border: `1px solid ${theme.palette.secondary.dark}`,
            borderTop: `none`,
            marginTop: theme.spacing(-0.5),
            borderBottomLeftRadius: theme.spacing(1),
            borderBottomRightRadius: theme.spacing(1),
          })}
        >
          <Typography fontSize={14} textAlign={"center"}>
            {posts == undefined
              ? ""
              : "No existen posts dentro de esta categoria. ¡Se el primero en crear uno!"}
          </Typography>
        </Box>
      ) : (
        posts.map((post, index) => {
          const { titulo, fijado, cerrado, createdAt, id_autor, id } = post;
          const user = users?.find((u) => u.id == id_autor);
          const date = new Date(createdAt);
          return (
            <Box width={"100%"} display={"flex"} key={`post-${id}`}>
              <Box
                width={downMd ? "40%" : "60%"}
                height={"64px"}
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: theme.spacing(1.5),
                  paddingInline: theme.spacing(1.5),
                  backgroundColor:
                    index % 2 == 0
                      ? theme.palette.primary.light
                      : theme.palette.secondary.dark,
                  borderBottomLeftRadius: index == posts.length - 1 ? 8 : 0,
                })}
              >
                <Box
                  display={"flex"}
                  gap={downMd ? 0 : 1}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={14}
                    sx={(theme) => ({
                      cursor: "pointer",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        textDecoration: "underline",
                      },
                    })}
                    onClick={() =>
                      navigate(`/post/${id}`, { state: { ...post } })
                    }
                  >
                    {titulo}
                  </Typography>
                  {fijado ? (
                    <Tooltip title="Tema fijado" placement="top">
                      <PushPinOutlined sx={{ width: 14 }} />
                    </Tooltip>
                  ) : null}
                  {cerrado ? (
                    <Tooltip title="Tema cerrado" placement="top">
                      <LockOutlined sx={{ width: 14 }} />
                    </Tooltip>
                  ) : null}
                </Box>

                <Typography
                  fontSize={12}
                  fontWeight={600}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Por{" "}
                  <Box
                    component={"span"}
                    onClick={() => navigate(`/perfil/${id_autor}`)}
                  >
                    <Typography
                      component={"span"}
                      fontSize={12}
                      fontWeight={600}
                      sx={(theme) => ({
                        cursor: "pointer",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          textDecoration: "underline",
                        },
                      })}
                    >
                      {user ? user.nombre_apellido : `#${id_autor}`}
                    </Typography>
                  </Box>
                </Typography>
              </Box>
              <Box
                width={downMd ? "30%" : "20%"}
                height={"64px"}
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    index % 2 == 0
                      ? theme.palette.primary.light
                      : theme.palette.secondary.dark,
                })}
              >
                <Typography fontSize={12}>
                  {Math.floor(Math.random() * 10)}
                </Typography>
              </Box>
              <Box
                width={downMd ? "30%" : "20%"}
                height={"64px"}
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    index % 2 == 0
                      ? theme.palette.primary.light
                      : theme.palette.secondary.dark,
                  borderBottomRightRadius: index == posts.length - 1 ? 8 : 0,
                })}
              >
                <Typography fontSize={12}>
                  {date.toLocaleDateString()}
                </Typography>
                <Typography fontSize={12}>
                  {date.toLocaleTimeString()} hs
                </Typography>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
};
