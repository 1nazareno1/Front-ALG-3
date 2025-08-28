//? Importes de React
import { useState } from "react";
//? Importes de Terceros
import { Box, TextField } from "@mui/material";
//? Importes propios
import { LoggedDesktop } from "./components/LoggedDesktop";
import { Logo } from "./Logo";
import { Menu, Search } from "@mui/icons-material";
import { MobileNavbar } from "./MobileNavbar";
import { NotLoggedDesktop } from "./components/NotLoggedDesktop";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setLoginOpen] = useState(false);
  const { isLogged, username } = useSelector((state) => state.auth);
  const { upLg } = useWindowSize();

  return (
    <>
      <Box
        sx={(theme) => ({
          alignItems: "center",
          background: theme.palette.primary.light,
          borderBottom: `1px solid ${theme.palette.secondary.light}`,
          display: "flex",
          height: "90px",
          justifyContent: "space-between",
          padding: theme.spacing(3),
        })}
      >
        <Logo />
        {upLg ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isLogged ? 7 : 2,
            }}
          >
            <TextField
              size="small"
              placeholder="Buscar..."
              variant="outlined"
              sx={{ background: "white", borderRadius: 1 }}
              InputProps={{
                startAdornment: <Search sx={{ color: "grey.500", mr: 1 }} />,
              }}
            />
            {isLogged ? (
              <LoggedDesktop username={username} />
            ) : (
              <NotLoggedDesktop
                modalOpen={modalOpen}
                setModalOpen={setLoginOpen}
              />
            )}
          </Box>
        ) : null}
        {!upLg ? (
          <Box onClick={() => setMenuOpen(!menuOpen)}>
            <Menu color="primary" fontSize={"medium"} />
          </Box>
        ) : null}
      </Box>
      <MobileNavbar menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
