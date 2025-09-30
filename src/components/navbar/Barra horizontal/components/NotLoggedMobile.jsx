import { Login } from "@mui/icons-material";
import { Divider, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";

export const NotLoggedMobile = ({ handleClick }) => {
  return (
    <>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.light,
          marginY: theme.spacing(3),
        })}
      />
      <ListItem
        button
        onClick={() => handleClick("/login")}
        sx={{
          cursor: "pointer",
        }}
      >
        <ListItemIcon>
          <Login sx={{ color: "white" }} />
        </ListItemIcon>
        <Typography
          sx={(theme) => ({
            color: "white",
            fontSize: theme.spacing(3),
            userSelect: "none",
          })}
        >
          Iniciar sesión
        </Typography>
      </ListItem>
    </>
  );
};
