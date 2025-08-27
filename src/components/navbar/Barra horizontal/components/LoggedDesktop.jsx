import { Logout, NotificationImportant } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";

export const LoggedDesktop = ({ username }) => {
  return (
    <Box display={"flex"} gap={3}>
      <Typography color="primary">
        Hola{" "}
        <Typography component={"span"} fontWeight={500}>
          {username}
        </Typography>
      </Typography>
      <NotificationImportant color="primary" sx={{ cursor: "pointer" }} />
      <Tooltip title="Cerrar sesión" placement="top">
        <Logout color="primary" sx={{ cursor: "pointer" }} />
      </Tooltip>
    </Box>
  );
};
