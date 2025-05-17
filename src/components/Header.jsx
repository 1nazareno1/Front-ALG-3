import { AppBar, Toolbar, Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SearchIcon />
          <InputBase placeholder="Busqueda rapida..." />
        </Box>

        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography>Hola usuario</Typography>
          <Box
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#e0e0e0",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;