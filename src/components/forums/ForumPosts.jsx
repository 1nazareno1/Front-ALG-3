import { LockOutlined, PushPinOutlined } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

export const ForumPosts = ({ posts, users }) => {
  const { downMd } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.spacing(1),
        width: "100%",
        maxWidth: "850px",
      })}
    >
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
          <Typography
            fontSize={14}
            sx={(theme) => ({
              color: theme.palette.primary.dark,
              marginBottom: theme.spacing(2),
              marginTop: theme.spacing(2.5),
              overflow: "hidden",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            ¡No se han encontrado posts!
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
                <Typography fontSize={12} fontWeight={600}>
                  Por {user ? user.nombre_apellido : `#${id_autor}`}
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
