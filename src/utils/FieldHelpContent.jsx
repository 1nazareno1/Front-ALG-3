// src/utils/FieldHelpContent.jsx
import { Typography } from "@mui/material";

export const FieldHelpContent = {
  name: (
    <Typography fontSize={14}>
      Ingresá tu <strong>nombre real</strong>. Mínimo 4 caracteres.
    </Typography>
  ),
  lastName: (
    <Typography fontSize={14}>
      Ingresá tu <strong>apellido real</strong>. Mínimo 4 caracteres.
    </Typography>
  ),
  alias: (
    <Typography fontSize={14}>
      El alias es un <strong>apodo visible</strong> para otros usuarios.
    </Typography>
  ),
  email: (
    <Typography fontSize={14}>
      Usá un email válido. Ejemplo: <em>usuario@dominio.com</em>
    </Typography>
  ),
  password: (
    <Typography fontSize={14}>
      La contraseña debe tener al menos <strong>8 caracteres</strong>.
    </Typography>
  ),
};