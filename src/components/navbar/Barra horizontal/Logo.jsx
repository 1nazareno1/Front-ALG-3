import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const Logo = ({ color = "main" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/inicio") {
      navigate("/inicio");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: location.pathname !== "/" ? "pointer" : "default",
        userSelect: "none",
        textDecoration: "none",
        outline: "none",
        "&:focus-visible": {
          outline: "2px solid",
        },
      }}
      role="button"
      tabIndex={0}
      onClick={() => {
        handleClick();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <Box
        component="img"
        src="android-chrome-192x192.png"
        alt="Logo"
        sx={{
          height: 60,
        }}
      />
      <Typography
        variant="h4"
        sx={(theme) => ({
          color:
            color === "main"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
          fontWeight: 700,
        })}
      >
        IZnianos
      </Typography>
    </Box>
  );
};
