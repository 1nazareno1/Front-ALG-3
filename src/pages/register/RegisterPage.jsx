import {
  Box,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { useWindowSize } from "../../hooks/useWindowSize";
import { RulesText } from "../../utils/Rules";

export const RegisterPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  useState(false);
  const { isLg, downMd } = useWindowSize();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [carrera, setCarrera] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = () => {
  if (!nombre || !apellido || !carrera || !email || !password) {
    setErrorMsg('*Por favor, rellena todos los campos.');
    return;
  }
  setErrorMsg('');
  // Aquí iría la lógica de registro real
};
  return (
    <>
      <Box
        sx={{
          maxWidth: 1024,
          py: 2,
          px: 4,
          mx: "auto",
          mt: isLg ? 4 : 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant={downMd ? "h5" : "h4"} sx={{ fontWeight: 400 }}>
            Registrar un nuevo usuario
          </Typography>
        </Box>
        {/* Terminos y condiciones */}
        <Box mb={2}>
          <Divider />
          <Typography
            variant={downMd ? "h6" : "h5"}
            mb={1}
            mt={2}
            sx={{ fontWeight: 300, color: "grey.700" }}
          >
            Terminos y condiciones
          </Typography>
          <Typography
            mb={1}
            fontSize={downMd ? 13 : 14}
            sx={{ textAlign: "justify" }}
          >
            {RulesText}
          </Typography>
          {/* Checkbox Términos */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  icon={<CheckBoxOutlineBlankRoundedIcon />}
                  checkedIcon={<CheckBoxRoundedIcon />}
                />
              }
              label={
                <Typography
                  sx={(theme) => ({
                    fontSize: 14,
                    color: acceptedTerms
                      ? theme.palette.primary.main
                      : theme.palette.grey,
                  })}
                >
                  Acepto los términos y condiciones
                </Typography>
              }
              sx={{ color: "grey.700", mb: 2 }}
            />
          </Box>
          <Divider />
        </Box>
        {/* Campos a rellenar */}
        <Box
          display={"flex"}
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {" "}
          {/* Campos */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={downMd ? "100%" : "48%"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                color: "grey.700",
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
              InputProps={{ sx: { height: 35, fontSize: 15 } }}
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={downMd ? "100%" : "48%"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                color: "grey.700",
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
              InputProps={{ sx: { height: 35, fontSize: 15 } }}
              value={apellido}
              onChange={e => setApellido(e.target.value)}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={downMd ? "100%" : "48%"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                color: "grey.700",
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
              InputProps={{ sx: { height: 35, fontSize: 15 } }}
              value={carrera}
              onChange={e => setCarrera(e.target.value)}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={downMd ? "100%" : "48%"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                color: "grey.700",
                letterSpacing: 0.5,
                mb: 0.5,
              }}
            >
              EMAIL
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              InputProps={{ sx: { height: 35, fontSize: 15 } }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            margin={"auto"}
            width={downMd ? "100%" : "48%"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                color: "grey.700",
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
              sx={{ mb: 1 }}
              InputProps={{ sx: { height: 35, fontSize: 15 } }}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0039A6",
            mx: "auto",
            display: "block",
            borderRadius: 2,
            height: 40,
            width: 274,
            mb: 1,
            mt: 1,
            fontWeight: 400,
            fontSize: 18,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#002f86",
            },
          }}
          disabled={!acceptedTerms}
          onClick={handleRegister}
        >
          Registrarse
        </Button>
        {errorMsg && (
          <Typography color="error" sx={{ textAlign: 'center', mt: 1 }}>
            {errorMsg}
          </Typography>
        )}
      </Box>
    
    </>
  );
};
