import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

export const ForumCategories = ({ categories }) => {
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
      <Box display={"flex"} justifyContent={downMd ? "flex-start" : "flex-end"}>
        <Button
          variant="contained"
          onClick={() => navigate("/crear-post")}
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            height: "40px",
            marginLeft: downMd ? theme.spacing(2) : theme.spacing(0),
            marginBottom: theme.spacing(2),
          })}
        >
          {" "}
          <Add />
          Crear categoria
        </Button>
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
        <Typography>Categorias</Typography>
      </Box>
      <Box display={"flex"}>
        <Box
          width={downMd ? "70%" : "80%"}
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
          })}
        >
          <Typography fontSize={10} color="primary.contrastText">
            Categoria
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
            Última actualización
          </Typography>
        </Box>
      </Box>
      {categories.length == 0 ? (
        <></>
      ) : (
        categories.map((category, index) => {
          const { titulo, contenido, id, updatedAt } = category;
          const date = new Date(updatedAt);
          return (
            <Box width={"100%"} display={"flex"} key={`category-${id}`}>
              <Box
                width={downMd ? "70%" : "80%"}
                height={"80px"}
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: theme.spacing(1.5),
                  paddingInline: theme.spacing(1.5),
                  backgroundColor:
                    index % 2 == 0
                      ? theme.palette.primary.light
                      : theme.palette.secondary.dark,
                  borderBottomLeftRadius:
                    index == categories.length - 1 ? 8 : 0,
                })}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography
                    fontSize={14}
                    sx={(theme) => ({
                      cursor: "pointer",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "max-content",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        textDecoration: "underline",
                      },
                    })}
                    onClick={() => navigate(`/foro/${id}`)}
                  >
                    {titulo}
                  </Typography>
                  <Typography
                    fontSize={12}
                    sx={(theme) => ({
                      cursor: "pointer",
                      height: "36px",
                      overflow: "hidden",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "wrap",
                    })}
                    onClick={() => navigate(`/foro/${id}`)}
                  >
                    {contenido}
                  </Typography>
                </Box>
              </Box>
              <Box
                width={downMd ? "30%" : "20%"}
                height={"80px"}
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    index % 2 == 0
                      ? theme.palette.primary.light
                      : theme.palette.secondary.dark,
                  borderBottomRightRadius:
                    index == categories.length - 1 ? 8 : 0,
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
