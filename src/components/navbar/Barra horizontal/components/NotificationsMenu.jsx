import { useState } from "react";
import { IconButton, Badge, Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ClickAwayListener } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const NotificationsMenu = ({ notifications, closeNotification }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton onClick={() => setOpen(!open)} sx={{ ml: 1 }}>
        <Badge
          badgeContent={notifications.length}
          color="secondary"
          anchorOrigin={{ vertical: "bottom" }}
        >
          <NotificationsIcon
            sx={(theme) => ({ color: theme.palette.primary.main })}
          />
        </Badge>
      </IconButton>

      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: 70,
              right: 0,
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 4,
              borderRadius: 2,
              p: 2,
              zIndex: 9999,
            }}
          >
            {notifications.length === 0 ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography fontSize={12}>No hay notificaciones</Typography>
              </Box>
            ) : (
              notifications.map((n) => (
                <Box
                  key={n.id}
                  sx={() => ({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 0.5,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  })}
                >
                  {" "}
                  <Typography
                    fontSize={12}
                    key={n.id}
                    sx={(theme) => ({
                      userSelect: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      },
                    })}
                    onClick={() => {
                      closeNotification(n.id);
                      navigate(n.url);
                    }}
                  >
                    {n.mensaje}
                  </Typography>
                  <Cancel
                    onClick={() => closeNotification(n.id)}
                    fontSize={"10px"}
                    sx={(theme) => ({
                      "&:hover": { color: theme.palette.error.main },
                    })}
                  />
                </Box>
              ))
            )}
          </Box>
        </ClickAwayListener>
      )}
    </>
  );
};
