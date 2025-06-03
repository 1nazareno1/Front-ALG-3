// src/components/forum/ForumTopicList.jsx
import { Box, Typography, Paper } from '@mui/material';

export const ForumTopicList = () => (
  <Box sx={{ p: 2 }}>
    <Box sx={{ backgroundColor: '#1976D2', color: 'white', p: 1 }}>
      <Typography variant="body2">Temas importantes</Typography>
    </Box>

    <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
      <Typography>🧷 Tema fijado</Typography>
      <Typography variant="caption">Usuario</Typography>
    </Paper>

    <Box sx={{ backgroundColor: '#29B6F6', color: 'white', p: 1, mt: 3 }}>
      <Typography variant="body2">Temas normales</Typography>
    </Box>

    <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
      <Typography>Tema</Typography>
      <Typography variant="caption">Usuario</Typography>
    </Paper>

    <Paper variant="outlined" sx={{ p: 2, mt: 1, backgroundColor: '#EEEEEE' }}>
      <Typography>
        Tema cerrado 🔒
      </Typography>
      <Typography variant="caption">Usuario</Typography>
    </Paper>

    <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
      <Typography>Tema</Typography>
      <Typography variant="caption">Usuario</Typography>
    </Paper>
  </Box>
);
