import { useState } from "react";
import { IconButton, Badge, Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ClickAwayListener } from "@mui/material";

export const NotificationsMenu = ({ notificaciones }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(!open)} sx={{ ml: 1 }}>
        <Badge badgeContent={notificaciones.length} color="error">
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
            <Typography variant="h6" sx={{ mb: 1 }}>
              Notificaciones
            </Typography>

            {notificaciones.length === 0 ? (
              <Typography sx={{ mb: 1 }}>No tienes notificaciones.</Typography>
            ) : (
              notificaciones.map((n) => (
                <Typography key={n.id} sx={{ mb: 1 }}>
                  {n.mensaje}
                </Typography>
              ))
            )}
          </Box>
        </ClickAwayListener>
      )}
    </>
  );
};
