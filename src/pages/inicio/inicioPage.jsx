import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";

export const LoginPage = () => {
  const { isLg, downMd } = useWindowSize();

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
        gap={2}
        mb={2}
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
        />
        <Box textAlign="right" mb={1}>
          <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
            ¿Olvidaste tu contraseña?
          </Link>
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
          width: 200,
          mb: 1,
          mt: 1,
          fontWeight: 400,
          fontSize: 18,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#002f86",
          },
        }}
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};