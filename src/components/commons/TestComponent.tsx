import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TestComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (): void => {
    console.log("Apretaste el boton!");

    setTimeout(() => {
      setLoading(true);
      console.log("Cargando");
    }, 2500);

    setTimeout(() => {
      setLoading(false);
      console.log("Redireccionando");
      navigate("/foro");
    }, 7500);
  };

  return (
    <Box
      data-name="TestComponent"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography>Boton de ejemplo</Typography>
      <Button variant="contained" onClick={handleClick}>
        {loading ? (
          <CircularProgress color="secondary" size={24.5} thickness={5} />
        ) : (
          "Ir a /foro"
        )}
      </Button>
    </Box>
  );
};


