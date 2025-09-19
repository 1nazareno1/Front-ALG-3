import { useState } from 'react';
import { Box } from '@mui/material';

const Calendario = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  return (
   <Box
      sx={{
        width: '100%',
        height: '85vh',
        bgcolor: '#e9edf0ff', // Fondo azul como tu estilo
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showTz=0&showTitle=0&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVyLmdvb2dsZS5jb20&color=%230b8043"
        width="90%"
        height="90%"
        frameBorder="0"
        scrolling="no"
        style={{ borderRadius: 16, background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        title="Calendario"
      ></iframe>
    </Box>
  );
};

export default Calendario;