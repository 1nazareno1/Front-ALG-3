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
          Bienvenidos al foro de Iseta
        </Typography>
        <Typography fontSize={!upLg ? 11 : 13}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ipsa,
          assumenda reiciendis eos accusantium expedita molestias!
        </Typography>
      </Box>
    </Box>
  );
};
