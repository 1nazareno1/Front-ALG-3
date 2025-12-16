import { Box, Tooltip } from "@mui/material";
import { Share } from "@mui/icons-material";
import { toast } from "sonner";
import React from "react";

export const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || document.title,
          text: text || "Mira este enlace de ISETAnianos",
          url: url || window.location.href,
        });
        toast.success("¡Enlace compartido con éxito!");
      } catch (error) {
        toast.error("Error al compartir el enlace.", {
          description: error.message,
        });
      }
    } else {
      toast.error("Compartir no está soportado en este navegador.", {
        description:
          "Por favor, copia la URL desde la barra de direcciones para compartir.",
      });
    }
  };

  return (
    <Box
      onClick={handleShare}
      sx={(theme) => ({
        cursor: "pointer",
        transition: "ease-in .1s",
        "&:hover": {
          color: theme.palette.info.main,
          transform: "translateY(-2.5px)",
        },
      })}
    >
      <Tooltip placement="top" title="Compartir enlace">
        <Share />
      </Tooltip>
    </Box>
  );
};
