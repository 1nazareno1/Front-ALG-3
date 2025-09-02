import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getTimeAgoFromString } from "../../utils/Commons";

export const SearchResult = ({ post }) => {
  const navigate = useNavigate();
  const { id, titulo, contenido, createdAt } = post;

  return (
    <Box key={id} mb={2} pb={2} borderBottom={"1px solid #ccc"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          onClick={() => navigate(`/post/${id}`, { state: { ...post } })}
          sx={(theme) => ({
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.main,
              textDecoration: "underline",
            },
          })}
        >
          <Typography
            variant="h6"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
              },
            })}
          >
            {titulo}
          </Typography>
        </Box>
        <Typography variant="body2">
          {getTimeAgoFromString(createdAt)}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        mt={0.5}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {contenido}
      </Typography>
    </Box>
  );
};
