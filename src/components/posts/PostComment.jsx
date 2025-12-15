import React from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { getTimeAgoFromString } from "../../utils/Commons";
import { Delete, Flag } from "@mui/icons-material";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";

export const PostComment = ({
  comment,
  handleOpenMessageReportModal,
  navigate,
}) => {
  const { userInfo } = useAuth();
  const { autor, contenido, createdAt } = comment;

  if (!autor) {
    return null;
  }

  return (
    <Box display={"flex"} gap={1.5} mb={1}>
      <Avatar src="/profilePicture.png" alt={autor.nombre_apellido} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          mb: 2,
        }}
      >
        <Box display={"flex"} gap={1}>
          <Typography fontSize={14}>
            <Typography
              component={"span"}
              fontWeight={500}
              fontSize={"inherit"}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
              onClick={() => navigate(`/perfil/${autor.id}`)}
            >
              {autor.nombre_apellido}
            </Typography>{" "}
            •{" "}
            <Tooltip
              placement={"top"}
              sx={{ cursor: "pointer" }}
              title={new Date(createdAt).toLocaleString()}
            >
              <Typography
                component={"span"}
                fontSize={"inherit"}
                color="text.secondary"
              >
                {getTimeAgoFromString(createdAt)}
              </Typography>
            </Tooltip>
          </Typography>
          <Box display={"flex"} gap={0.5}>
            <Tooltip title="Reportar comentario" placement="top">
              <Typography
                component={"span"}
                sx={{
                  cursor: "pointer",
                  transition: "ease-in-out 0.15s",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "error.main",
                    transform: "translateY(-2px)",
                  },
                }}
                onClick={() => handleOpenMessageReportModal({ messageData: comment })}
              >
                <Flag sx={{ width: "14px", height: "14px" }} />
              </Typography>
            </Tooltip>
            {(userInfo && userInfo.userID == autor.id) ||
            userInfo.rol == "ADMIN" ||
            userInfo.rol == "MODERADOR" ? (
              <Tooltip placement={"top"} title="Eliminar mensaje">
                <Typography
                  component={"span"}
                  sx={{
                    cursor: "pointer",
                    transition: "ease-in-out 0.15s",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "error.main",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Delete sx={{ width: "14px", height: "14px" }} />
                </Typography>
              </Tooltip>
            ) : null}
          </Box>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography>{contenido}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
