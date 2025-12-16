import { Message } from "@mui/icons-material";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { PostComment } from "./PostComment";
import { CommentBox } from "./CommentBox";
import { Fragment, useEffect, useState } from "react";

export const PostBodyContent = ({
  // handleUserLike,
  messagesStatus,
  navigate,
  postData,
  handleOpenMessageDeleteModal,
  handleOpenMessageReportModal,
  // userLike,
  setPostData,
}) => {
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    setPagination(1);
  }, [postData]);

  if (!postData) {
    return null;
  }

  const { comments, contenido, createdAt } = postData;

  return (
    <>
      <Typography>
        {contenido.split("<br/>").map((line, index) => (
          <Fragment key={"post-content" + index}>
            {line}
            <br />
          </Fragment>
        ))}
      </Typography>
      <Box display={"flex"} gap={2} flexDirection={"column"}>
        {/* <Box
              display={"flex"}
              gap={1}
              alignItems={"center"}
              onClick={() => handleUserLike()}
            >
              <ThumbUp
                sx={(theme) => ({
                  color: userLike
                    ? theme.palette.primary.main
                    : theme.palette.common.dark,
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
              <Typography>{.likes?.length} me gustas</Typography>
            </Box> */}{" "}
        {createdAt ? (
          <Box>
            <Typography variant="caption" color="text.secondary">
              Publicado el {new Date(createdAt).toLocaleDateString()} a las{" "}
              {new Date(createdAt).toLocaleTimeString()}
            </Typography>
          </Box>
        ) : null}
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Message />
          <Typography>{comments?.length} comentarios</Typography>
        </Box>
      </Box>
      <CommentBox
        comments={comments}
        messageStatus={messagesStatus}
        postData={postData}
        setPostData={setPostData}
      />
      <Box data-name="PostBodyContent-MessagesContainer" mt={1}>
        {messagesStatus == "loading" ? (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop={8}
          >
            <CircularProgress size={20} />
            <Typography fontSize={12}>Cargando posts...</Typography>
          </Box>
        ) : comments?.length > 0 ? (
          <>
            {comments.slice(0, pagination * 5).map((comment) => (
              <PostComment
                comment={comment}
                handleOpenMessageDeleteModal={handleOpenMessageDeleteModal}
                handleOpenMessageReportModal={handleOpenMessageReportModal}
                key={comment.id}
                navigate={navigate}
              />
            ))}
            {/* Botón mostrar mas comentarios (limitamos cada 5 mensajes) */}
            {comments.length > pagination * 5 ? (
              <Box mx={"auto"} width={"fit-content"}>
                <Button
                  display={"flex"}
                  justifyContent={"center"}
                  variant="outlined"
                  sx={{
                    cursor: "pointer",
                    transition: "ease-in-out 0.15s",
                    "&:hover": {
                      color: "secondary.light",
                      transform: "translateY(-5px)",
                    },
                  }}
                  onClick={() => setPagination(pagination + 1)}
                >
                  Mostrar más comentarios
                </Button>
              </Box>
            ) : null}
          </>
        ) : null}
      </Box>
    </>
  );
};
