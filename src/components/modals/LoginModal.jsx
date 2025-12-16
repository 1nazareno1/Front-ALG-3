import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";
import { DebounceClass, validateEmail, validatePassword } from "../../utils/Commons";

export const LoginModal = ({ open, onClose }) => {
  const { status } = useSelector((state) => state.auth);
  const { handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (status === "succesful") onClose();
  }, [status, onClose]);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const debounce = useMemo(() => new DebounceClass(500), []);

  function handleSubmit() {
    if (status === "loading") return;
    if (!validateEmail(email) || !validatePassword(password)) return;
    handleLogin({ email, password });
  }

  const isFormValid = validateEmail(email) && validatePassword(password);

  useEffect(() => {
    debounce.callback(() => {
      setEmailError(email.length > 0 ? !validateEmail(email) : false);
      setPasswordError(
        password.length > 0 ? !validatePassword(password) : false
      );
    });
  }, [email, password, debounce]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 574,
          height: 370,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h4" color="grey.700" sx={{ fontWeight: 400 }}>
            Inicio de sesión
          </Typography>
          <Box
            component="button"
            onClick={onClose}
            sx={{
              background: "none",
              border: "none",
              fontSize: 28,
              cursor: "pointer",
              color: "grey.700",
              lineHeight: 1,
              p: 0,
            }}
            aria-label="Cerrar"
          >
            <CloseIcon fontSize="inherit" />
          </Box>
        </Box>

        {/* Email */}
        <Typography
          sx={{
            fontWeight: 400,
            fontsize: 18,
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          type="email"
          sx={{ mb: 2 }}
          InputProps={{
            sx: { height: 35, fontsize: 15 },
          }}
          helperText={emailError ? "Por favor escriba un email válido" : ""}
          error={emailError}
        />

        {/* Contraseña */}
        <Typography
          sx={{
            fontWeight: 400,
            fontsize: 18,
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          sx={{ mb: 3 }}
          InputProps={{
            sx: { height: 35, fontsize: 15 },
          }}
          helperText={
            passwordError
              ? "La contraseña debe tener al menos 8 caracteres"
              : ""
          }
          error={passwordError}
        />

        {/* Botón ingresar */}
        <Button
          onClick={() => handleLogin({ email, password })}
          disabled={emailError || !isFormValid || status === "loading"}
          sx={(theme) => ({
            alignItems: "center",
            variant: "contained",
            backgroundColor: !isFormValid
              ? "grey.400"
              : status === "loading"
              ? theme.palette.secondary.dark
              : theme.palette.primary.main,
            mx: "auto",
            display: "flex",
            borderRadius: 2,
            height: 40,
            width: 200,
            mb: 2,
            mt: 1,
            fontWeight: 400,
            fontsize: 18,
            textTransform: "none",
            transition: "background-color 0.3s ease",
            color: "white", // 🔹 animación suave
          })}
        >
          {status === "loading" ? (
            <CircularProgress size={16} color="secondary" />
          ) : (
            "Ingresar"
          )}
        </Button>

        {/* Link olvidar contraseña */}
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
    </Modal>
  );
};
