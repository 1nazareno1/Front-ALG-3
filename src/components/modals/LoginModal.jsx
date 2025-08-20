import { Modal, Box, TextField, Typography, Button, IconButton } from "@mui/material";
import React from "react";


import CloseIcon from '@mui/icons-material/Close';




function LoginModal({open, onClose }) {
    return  ( 
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
                borderRadius: 2
            }}>
                <Box sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', mb: 2}}>
                    <Typography variant="h4" color="grey.700" sx={{ fontWeight: 400}}>Inicio de sesión</Typography>
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
                        p:0,
                    }}
                    aria-label="Cerrar"
                    
                    >
                       <CloseIcon fontSize="inherit"/>

                    </Box>
                </Box>
                <Typography
                sx={{
                  fontWeight: 400,    
                  fontsize: 18,
                  color: 'grey.700',
                  letterSpacing: 0.5,
                  mb: 0.5,
                }}
                 >
                  USUARIO
                </Typography>
                <TextField
                variant="outlined"
                fullWidth
                sx= {{ mb: 1 }}
                InputProps={{
                  sx: {height: 27, fontsize: 15}
                }}
                 />

                <Typography
                sx= {{
                  fontWeight: 400,    
                  fontsize: 18,
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
                  sx: {height: 27, fontsize: 15}
                }}
                
                />
                <Button
                variant="contained"
                alignItems="center"
                
                sx= {{
                  bgcolor: '#0039A6',
                  mx: 'auto',
                  display: 'block',
                  borderRadius: 2,
                  height: 40,
                  width: 274,
                  mb: 1,
                  mt: 1,
                  fontWeight: 400,
                  fontsize:18,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#002f86',
                  },
                }}
                >
                  Ingresar

                </Button>

                <Typography
                component="a"
                href="#"
                sx={{ 
                  color: 'grey.700',
                   fontsize: 10,
                   display: 'block',
                   textAlign: 'center',
                    mt: 1,
                  textDecoration: 'none',
                cursor: 'pointer',}}
                 >
                  ¿Te olvidate la contraseña?
                </Typography>
                
            </Box>

        </Modal>
    )
    
}
export default LoginModal