import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

const carreras = [
  "Tecnicatura en Análisis de Sistemas",
  "Tecnicatura en Administración",
  "Tecnicatura en Logística",
  "Tecnicatura en Higiene y Seguridad",
];

const anios = [
  "1° Año",
  "2° Año",
  "3° Año",
  "4° Año",
];

export const RegisterPage = () => {
  const [form, setForm] = useState({
    nombre: "",
    nameuser: "",
    email: "",
    password: "",
    confirmarPassword: "",
    esAlumno: "",
    carrera: "",
    anio: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      esAlumno: e.target.value,
      carrera: "",
      anio: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aca se podría agregar la lógica para enviar los datos al backend
    console.log(form);
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      minHeight="100vh"
      width="100vw"
      bgcolor="#f5f5f5"
    >
      {/* Columna izquierda: Bienvenida */}
      {!isMobile && (
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(135deg, #1976d2 60%, #fff 100%)",
            color: "#fff",
            p: 6,
          }}
        >
          <Typography variant="h3" mb={2} align="center" fontWeight={700}>
            ¡Bienvenido al Foro ISETA!
          </Typography>
          <Typography variant="h6" mb={3} align="center">
            Regístrate para participar en debates, hacer preguntas, compartir conocimientos y conectar con otros estudiantes y docentes del ISETA.
          </Typography>
          <Box
            // Imagen representativa del foro. Puse una de ejemplo, se puede cambiar.
            component="img"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
            alt="Foro ISETA"
            sx={{
              width: "80%",
              maxWidth: 350,
              borderRadius: 3,
              boxShadow: 4,
              mt: 2,
            }}
          />
        </Box>
      )}

      {/* Columna derecha: Registro */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "#fff",
          p: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            background: "#fff",
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <Typography variant="h4" mb={2} align="center" color="primary">
            Registro de Usuario
          </Typography>
          <Typography variant="body2" mb={3} align="center" color="text.secondary">
            Por favor, completa el formulario para registrarte.
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Nombre completo"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              placeholder="Ej: Juan Pérez"
              helperText="Ingresa tu nombre y apellido"
            />
            <TextField
              label="Nombre de usuario"
              name="nameuser"
              value={form.nameuser}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              placeholder="Ej: Pepito1234"
              helperText="Ingresa tu usuario"
            />
            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              placeholder="Ej: juan@email.com"
              helperText="Utiliza un correo válido"
            />
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              placeholder="Mínimo 8 caracteres"
              helperText="Elige una contraseña segura"
            />
            <TextField
              label="Confirmar contraseña"
              name="confirmarPassword"
              type="password"
              value={form.confirmarPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              placeholder="Repite tu contraseña"
            />

            <FormControl component="fieldset" margin="normal" fullWidth>
              <Typography variant="subtitle1" mt={2}>
                ¿Eres alumno del ISETA?
              </Typography>
              <RadioGroup
                row
                name="esAlumno"
                value={form.esAlumno}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <FormHelperText>
                Selecciona una opción
              </FormHelperText>
            </FormControl>

            {form.esAlumno === "si" && (
              <>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel id="carrera-label">Carrera</InputLabel>
                  <Select
                    labelId="carrera-label"
                    name="carrera"
                    value={form.carrera}
                    label="Carrera"
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Selecciona tu carrera</em>
                    </MenuItem>
                    {carreras.map((carrera) => (
                      <MenuItem key={carrera} value={carrera}>
                        {carrera}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Ej: Tecnicatura en Análisis de Sistemas</FormHelperText>
                </FormControl>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel id="anio-label">Año</InputLabel>
                  <Select
                    labelId="anio-label"
                    name="anio"
                    value={form.anio}
                    label="Año"
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Selecciona el año que cursas</em>
                    </MenuItem>
                    {anios.map((anio) => (
                      <MenuItem key={anio} value={anio}>
                        {anio}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Ej: 2° Año</FormHelperText>
                </FormControl>
              </>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Registrarse
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;