import { Box, Typography } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CreateButton } from "../commons/CreateButton";

export const ForumCategories = ({ categories }) => {
  const { downMd } = useWindowSize();
  const navigate = useNavigate();
  const { rol } = useSelector((state) => state.auth);

  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.spacing(1),
        width: "100%",
        maxWidth: "850px",
      })}
    >
      {rol === "ADMIN" && (
        <Box
          display={"flex"}
          justifyContent={downMd ? "flex-start" : "flex-end"}
          mb={2}
        >
          <CreateButton
            onClick={() => navigate("/crear-categoria")}
            text="Crear categoria"
          />
        </Box>
      )}
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
          width={"100%"}
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
      </Box>
      {categories.length == 0 ? (
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
            Hubo un error al cargar las categorias
          </Typography>
        </Box>
      ) : (
        categories.map((category, index) => {
          const { titulo, contenido, id } = category;
          return (
            <Box width={"100%"} display={"flex"} key={`category-${id}`}>
              <Box
                width={"100%"}
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
                      fontWeight: 500,
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
                    sx={{
                      cursor: "pointer",
                      height: "36px",
                      overflow: "hidden",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "wrap",
                    }}
                    onClick={() => navigate(`/foro/${id}`)}
                  >
                    {contenido}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
};
