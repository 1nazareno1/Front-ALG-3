import { Box, Tooltip, Typography } from "@mui/material";
import { logout } from "../../../../redux/slices/authSlice";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { NotificationsMenu } from "./NotificationsMenu";
import { useState } from "react";

export const LoggedDesktop = ({ username }) => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([
    { id: 1, mensaje: `Usuario X ha comentado tu post "Bienvenidos al Foro"` },
    { id: 2, mensaje: `Tu post "Bienvenidos al Foro" fue cerrado` },
  ]);

  const closeNotification = (id) => {
    const newNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(newNotifications);
  };

  return (
    <Box display={"flex"} gap={3} alignItems={"center"}>
      <Typography color="primary">
        Hola{" "}
        <Typography component={"span"} fontWeight={500}>
          {username}
        </Typography>
      </Typography>
      <NotificationsMenu notifications={notifications} closeNotification={closeNotification} />
      <Tooltip title="Cerrar sesión" placement="top">
        <Box
          height={24}
          onClick={() => {
            dispatch(logout());
          }}
        >
          <Logout color="primary" sx={{ cursor: "pointer" }} />
        </Box>
      </Tooltip>
    </Box>
  );
};
