import { Box, Tooltip, Typography } from "@mui/material";
import { resetAuthState } from "../../../../redux/slices/authSlice";
import { Logout } from "@mui/icons-material";
import { NotificationMock } from "../../../../utils/Commons";
import { NotificationsMenu } from "./NotificationsMenu";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const LoggedDesktop = ({ username }) => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState(NotificationMock);

  const closeNotification = (id) => {
    const newNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(newNotifications);
  };

  return (
    <Box display={"flex"} gap={3} alignItems={"center"}>
      <Typography
        color="primary"
        sx={{
          maxWidth: "30ch",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Hola{" "}
        <Typography component={"span"} fontWeight={500}>
          {username}
        </Typography>
      </Typography>
      <NotificationsMenu
        notifications={notifications}
        closeNotification={closeNotification}
      />
      <Tooltip title="Cerrar sesión" placement="top">
        <Box
          height={24}
          onClick={() => {
            dispatch(resetAuthState());
            location.reload();
          }}
        >
          <Logout color="primary" sx={{ cursor: "pointer" }} />
        </Box>
      </Tooltip>
    </Box>
  );
};
