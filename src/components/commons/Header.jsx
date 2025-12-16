import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = ({ upLg }) => {
  return (
    <Box
      sx={(theme) => ({
        alignItems: "center",
        background: theme.palette.secondary.light,
        display: "flex",
        flexDirection: !upLg ? "column" : "row",
        gap: !upLg ? theme.spacing(2) : theme.spacing(5),
        height: theme.spacing(30),
        justifyContent: "space-evenly",
        padding: theme.spacing(2),
        width: upLg ? "100%" : "100vw",
      })}
    >
      <img
        src="/iseta.png"
        style={{
          width: "100%",
          maxWidth: !upLg ? "250px" : "300px",
          marginLeft: !upLg ? "0px" : "16px",
        }}
      />
      <Box>
        <Typography fontSize={!upLg ? 18 : 32} fontWeight={500}>
          Bienvenidos al foro de ISETA
        </Typography>
        <Typography fontSize={!upLg ? 11 : 13}>
          Este es un espacio creado para compartir ideas, aprender juntos y fortalecer nuestra comunidad a través del respeto y la colaboración. 
          Aquí todas las voces cuentan, así que los invitamos a participar, aportar y disfrutar de este lugar pensado para crecer y construir en conjunto. ¡Sean todos muy bienvenidos!
        </Typography>
      </Box>
    </Box>
  );
};
