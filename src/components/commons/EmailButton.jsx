import React from "react";
import { Box, Tooltip } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";

export const EmailButton = ({ email, size = "24px" }) => {
  const handleEmailClick = (e) => {
    if (!email) {
      e.stopPropagation();
      return;
    }
    window.location.href = `mailto:${email}`;
  };

  return (
    <Tooltip
      placement="top"
      title={email ? `Enviar correo a ${email}` : "Email no disponible"}
    >
      <Box
        onClick={handleEmailClick}
        sx={(theme) => ({
          cursor: email ? "pointer" : "not-allowed",
          transition: "ease-in .1s",
          display: "inline-flex",
          "&:hover": {
            color: email ? theme.palette.info.main : "inherit",
            transform: email ? "translateY(-2.5px)" : "none",
          },
        })}
      >
        <EmailOutlined sx={{ fontSize: size }} />
      </Box>
    </Tooltip>
  );
};
