import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useEffect, useMemo, useState } from "react";
import {
  DebounceClass,
  validateEmail,
  validatePassword,
} from "../../utils/Commons";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { isLg, downMd } = useWindowSize();
  const { status } = useSelector((state) => state.auth);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const debounce = useMemo(() => new DebounceClass(500), []);

  const isFormValid = useMemo(
    () => validateEmail(email) && validatePassword(password),
    [email, password]
  );

  useEffect(() => {
    debounce.callback(() => {
      setEmailError(email.length > 0 ? !validateEmail(email) : false);
      setPasswordError(
        password.length > 0 ? !validatePassword(password) : false
      );
    });
  }, [email, password, debounce]);

  useEffect(() => {
    if (status === "succesful") navigate("/inicio");
  }, [status, navigate]);

  const handleSubmit = () => {
    if (status === "loading") return;
    if (!isFormValid || status === "loading") return;
    handleLogin({ email, password });
  };

  return (
    <Box
      sx={{
        maxWidth: 480,
        py: 2,
        px: 4,
        mx: "auto",
        mt: isLg ? 8 : 2,
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
          Iniciar sesión
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        gap={0.5}
        mb={2}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            letterSpacing: 0.5,
          }}
          color="grey.700"
        >
          EMAIL
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          type="email"
          InputProps={{ sx: { height: 35, fontSize: 15 } }}
          helperText={emailError ? "Por favor escriba un email válido" : ""}
          error={emailError}
        />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 18,
            letterSpacing: 0.5,
            mt: 1,
          }}
          color="grey.700"
        >
          CONTRASEÑA
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          InputProps={{ sx: { height: 35, fontSize: 15 } }}
          helperText={
            passwordError
              ? "La contraseña debe tener al menos 8 caracteres"
              : ""
          }
          error={passwordError}
        />
        <Typography
          component="a"
          href="#"
          sx={(theme) => ({
            color: theme.palette.secondary.dark,
            fontsize: 10,
            display: "block",
            textAlign: "center",
            mt: 1,
            textDecoration: "none",
            cursor: "pointer",
            transition: "ease-in .1s",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          })}
        >
          ¿Te olvidaste la contraseña?
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!isFormValid || status === "loading"}
        sx={{
          bgcolor: !isFormValid
            ? "grey.400"
            : status === "loading"
            ? "secondary.dark"
            : "primary.main",
          mx: "auto",
          display: "block",
          borderRadius: 2,
          height: 40,
          width: 200,
          mb: 1,
          mt: 1,
          fontWeight: 400,
          fontSize: 18,
          textTransform: "none",
          "&:hover": {
            bgcolor: !isFormValid ? "grey.400" : "primary.dark",
          },
          color: "white",
        }}
      >
        {status === "loading" ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
    </Box>
  );
};
