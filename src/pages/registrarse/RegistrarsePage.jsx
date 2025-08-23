import { Box, TextField, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

function RegistrarsePage({ onClose }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 574,
        height: 525,
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
        {onClose && (
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
        )}
      </Box>

      {/* Campos */}
      <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey.700', letterSpacing: 0.5, mb: 0.5 }}>
        NOMBRE
      </Typography>
      <TextField variant="outlined" fullWidth sx={{ mb: 1 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

      <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey.700', letterSpacing: 0.5, mb: 0.5 }}>
        APELLIDO
      </Typography>
      <TextField variant="outlined" fullWidth sx={{ mb: 1 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

      <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey.700', letterSpacing: 0.5, mb: 0.5 }}>
        CARRERA
      </Typography>
      <TextField variant="outlined" fullWidth sx={{ mb: 1 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

      <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey.700', letterSpacing: 0.5, mb: 0.5 }}>
        EMAIL
      </Typography>
      <TextField variant="outlined" fullWidth sx={{ mb: 3 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

      <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey.700', letterSpacing: 0.5, mb: 0.5 }}>
        CONTRASEÑA
      </Typography>
      <TextField type="password" variant="outlined" fullWidth sx={{ mb: 3 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

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
  );
}

export default RegistrarsePage;