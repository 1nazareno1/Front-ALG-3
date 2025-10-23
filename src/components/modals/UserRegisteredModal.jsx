import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const UserRegisteredModal = ({ open }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/inicio");
  };
  
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 574,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 400, mb: 2 }}>
            Se ha registrado el usuario con éxito. Seras redirigido a la página
            de inicio
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={() => onClose()}>
            Volver
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
