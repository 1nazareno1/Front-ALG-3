import { Modal, Box, TextField, Typography, Button } from '@mui/material';
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

function RegistrarseModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 574,
          height: 550,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* Encabezado */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" color="grey.700" sx={{ fontWeight: 400 }}>
            Registrarse
          </Typography>
          <Box
            component="button"
            onClick={onClose}
            sx={{
              background: 'none',
              border: 'none',
              fontSize: 28,
              cursor: 'pointer',
              color: 'grey.700',
              lineHeight: 1,
              p: 0,
            }}
            aria-label="Cerrar"
          >
            <CloseIcon fontSize="inherit" />
          </Box>
        </Box>

        {/* Usuario */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          NOMBRE
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          InputProps={{
            sx: { height: 27, fontSize: 15 },
          }}
        />

        {/* Apellido */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          APELLIDO
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          InputProps={{
            sx: { height: 27, fontSize: 15 },
          }}
        />
        {/* Carrera */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          CARRERA
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          InputProps={{
            sx: { height: 27, fontSize: 15 },
          }}
        />

        {/* Email */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          EMAIL
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            sx: { height: 27, fontSize: 15 },
          }}
        />

        {/* Contraseña */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          CONTRASEÑA
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            sx: { height: 27, fontSize: 15 },
          }}
        />

        {/* Botón */}
        <Button
          variant="contained"
          sx={{
            bgcolor: '#0039A6',
            mx: 'auto',
            display: 'block',
            borderRadius: 2,
            height: 40,
            width: 274,
            mb: 1,
            mt: 1,
            fontWeight: 400,
            fontSize: 18,
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#002f86',
            },
          }}
        >
          Registrarse
        </Button>
      </Box>
    </Modal>
  );
}

export default RegistrarseModal;
