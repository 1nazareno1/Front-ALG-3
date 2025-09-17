import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button, TextField } from '@mui/material';

const PerfilPage = () => {
  const { username, role, carrera, fechaRegistro, mensajes, likes, temas } = useSelector((state) => state.auth);

  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(username || '');

  const handleEditarClick = () => setEditando(true);

  const handleGuardarClick = () => {
    // Aquí deberías despachar una acción para actualizar el nombre en el store/backend
    // dispatch(actualizarNombreUsuario(nuevoNombre));
    setEditando(false);
  };
  return (
    <Box
      sx={{
        bgcolor: '#1793db',
        borderRadius: 3,
        p: 3,
        maxWidth: 800,
        width: '100%',
        minHeight: 220,
        color: 'white',
        boxShadow: 3,
        margin: '40px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Recuadro para la foto de perfil */}
        <Box
          sx={{
            width: 64,
            height: 64,
            bgcolor: '#fff',
            borderRadius: '50%',
            border: '2px solid #1976d2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            overflow: 'hidden',
          }}
        >
          {/* Aquí podrías poner una imagen real en el futuro */}
          <Typography variant="h4" color="#1976d2">
            {nuevoNombre ? nuevoNombre[0].toUpperCase() : 'U'}
          </Typography>
        </Box>
        {editando ? (
          <>
            <TextField
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              size="small"
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: 1, mr: 1, flex: 1 }}
              inputProps={{ maxLength: 30 }}
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={handleGuardarClick}
              sx={{ mr: 1 }}
            >
              Guardar
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => setEditando(false)}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, mr: 2 }}>
              {nuevoNombre || 'Nombre de usuario'}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              onClick={handleEditarClick}
              sx={{ height: 30, minWidth: 60 }}
            >
              Editar
            </Button>
          </>
        )}
      </Box>
      <Typography sx={{ fontWeight: 500, mb: 1 }}>
        {nuevoNombre || 'Usuario'}
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Estudiando <b>{carrera || 'Tec. Sup. en Alimentos'}</b>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Registrado el <b>{fechaRegistro || '26-08-2025'}</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        {mensajes || 0} mensajes
      </Typography>
      <Typography sx={{ fontWeight: 500 }}>
        {likes || 0} me gustas en {temas || 0} temas
      </Typography>
    </Box>
  );
};

export default PerfilPage;