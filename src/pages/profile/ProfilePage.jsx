import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

export const ProfilePage = () => {
  const { username, role, carrera, fechaRegistro, mensajes, likes, temas } =
    useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        bgcolor: "#1793db",
        borderRadius: 3,
        p: 3,
        maxWidth: 800,
        width: "100%",
        minHeight: 220,
        color: "white",
        boxShadow: 3,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        {username || "Nombre de usuario"}
      </Typography>
      <Typography sx={{ fontWeight: 500, mb: 1 }}>
        {role || "Usuario"}
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Estudiando <b>{carrera || "Tec. Sup. en Alimentos"}</b>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Registrado el <b>{fechaRegistro || "26-08-2025"}</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>{mensajes || 0} mensajes</Typography>
      <Typography sx={{ fontWeight: 500 }}>
        {likes || 0} me gustas en {temas || 0} temas
      </Typography>
    </Box>
  );
};

