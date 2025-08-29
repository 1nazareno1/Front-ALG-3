import { ThumbUp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const PostBodyContent = ({ handleUserLike, postData, userLike }) => {
  return (
    <>
      {postData ? (
        <>
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
              <Typography>{postData?.likes?.length} me gustas</Typography>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
};
