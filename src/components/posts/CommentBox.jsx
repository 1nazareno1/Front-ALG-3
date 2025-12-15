import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";
import { useDispatch } from "react-redux";
import {
  getMessagesByPostId,
  postMessageInPost,
} from "../../redux/slices/postsSlice";
import { toast } from "sonner";

export const CommentBox = ({
  comments = [1],
  messageStatus,
  postData,
  setPostData,
}) => {
  const { checkLastAction, isAuthenticated, userInfo } = useAuth();
  const [commentForm, setCommentForm] = useState({
    body: "",
    postId: postData ? postData.id : null,
    userId: userInfo ? userInfo.userID : null,
  });
  const [validForm, setValidForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && commentForm.body.trim().length >= 8) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [commentForm.body, setValidForm, isAuthenticated]);

  const handleCommentChange = (e) => {
    if (e.target.value.length > 280) {
      return;
    }
    setCommentForm({
      ...commentForm,
      body: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm || messageStatus == "loading") return;
    if (checkLastAction()) {
      return;
    }
    try {
      await dispatch(
        postMessageInPost({
          body: commentForm.body,
          postId: commentForm.postId,
          userId: commentForm.userId,
        })
      );
      setCommentForm({
        ...commentForm,
        body: "",
      });
      const newMessages = await dispatch(getMessagesByPostId(postData.id));
      setPostData({
        ...postData,
        comments: newMessages.payload,
      });
    } catch (error) {
      console.error("Ocurrió un error al enviar el comentario:", error);
    }
  };

  return (
    <Box>
      <TextField
        disabled={!isAuthenticated}
        helperText={!isAuthenticated ? null : `${commentForm.body.length}/280`}
        placeholder={
          !isAuthenticated
            ? "Debes iniciar sesión para comentar"
            : comments.length > 0
            ? "Añadir un comentario..."
            : "No existen comentarios en este post. Sé el primero..."
        }
        fullWidth
        multiline
        variant="outlined"
        value={commentForm.body}
        onChange={handleCommentChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && validForm) {
            handleSubmit(e);
          }
        }}
        InputProps={{
          maxLength: 280,
          style: {
            cursor: isAuthenticated ? "text" : "not-allowed",
            padding: "8px 16px",
            borderRadius: "25px",
          },
          endAdornment: (
            <Box
              onClick={handleSubmit}
              disabled={validForm}
              sx={{
                fontWeight: 500,
                color: !validForm ? "secondary.dark" : "primary.main",
                cursor: !validForm ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
              }}
            >
              Enviar
            </Box>
          ),
        }}
      />
    </Box>
  );
};
