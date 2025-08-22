import { Modal, Box, TextField, Typography, Button } from '@mui/material';
import react from "react";
import CloseIcon from '@mui/icons-material/Close';

function RegistrarseModal({open, onClose}) {
    
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 574,
          height: 329,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" color="grey.700" sx={{ fontWeight: 400 }}>Registrarse</Typography>
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
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            color: 'grey.700',
            letterSpacing: 0.5,
            mb: 0.5,
          }}
        >
          NOMBRE DE USUARIO
        </Typography>
        <TextField variant="outlined" fullWidth margin="normal" />
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
        <TextField type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Registrarse
        </Button>
      </Box>
    </Modal>
  );
}