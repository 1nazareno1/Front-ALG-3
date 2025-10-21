import { AccountCircle, Logout } from "@mui/icons-material";
import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";

export const LoggedMobile = ({ username }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <AccountCircle
          sx={{
            color: "white",
            fontSize: 48,
            bgcolor: "green",
            borderRadius: "50%",
            p: 0.5,
          }}
        />
        <Box>
          <Typography
            sx={(theme) => ({
              color: "white",
              fontWeight: "bold",
              fontSize: theme.spacing(2.5),
              marginBottom: theme.spacing(0.5),
            })}
          >
            {username}
          </Typography>
          <Typography
            sx={(theme) => ({
              color: "white",
              fontSize: theme.spacing(2),
            })}
          >
            Mis mensajes
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.light,
          marginY: theme.spacing(3),
        })}
      />
      <ListItem button>
        <ListItemIcon>
          <Logout sx={{ color: "white" }} />
        </ListItemIcon>
        <Typography
          sx={(theme) => ({
            color: "white",
            fontSize: theme.spacing(3),
            userSelect: "none",
          })}
        >
          Cerrar sesión
        </Typography>
      </ListItem>
    </>
  );
};
