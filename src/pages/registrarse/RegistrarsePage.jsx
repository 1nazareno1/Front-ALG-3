import { Box, TextField, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

function RegistrarsePage({ onClose }) {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        my: 5,
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
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
      <TextField type="password" variant="outlined" fullWidth sx={{ mb: 2 }} InputProps={{ sx: { height: 35, fontSize: 15 } }} />

      {/* Checkbox Términos */}
      <FormControlLabel
        control={
          <Checkbox
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            icon={<CheckBoxOutlineBlankRoundedIcon />}
            checkedIcon={<CheckBoxRoundedIcon />}
          />
        }
        label="Acepto los términos y condiciones"
        sx={{ mb: 2, color: 'grey.700' }}
      />

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
        disabled={!aceptaTerminos} 
      >
        Registrarse
        
      </Button>
    </Box>
  );
}

export default RegistrarsePage;
