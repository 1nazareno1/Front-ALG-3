import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { AccountCircle, Login, Logout } from "@mui/icons-material";
import { Logo } from "./Logo";
import { MenuLinks } from "../../../utils/Commons";
import { MenuMobileLinkComponent } from "./components/MenuMobileLinkComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoggedMobile } from "./components/LoggedMobile";
import { NotLoggedMobile } from "./components/NotLoggedMobile";

export const MobileNavbar = ({ menuOpen, onClose }) => {
  const { isLogged, username } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
    onClose();
  };

  return (
    <Drawer open={menuOpen} onClose={onClose}>
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.main,
          width: "350px",
          height: "100vh",
          padding: theme.spacing(3),
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Logo color="white" />
        <Divider
          sx={(theme) => ({
            background: theme.palette.primary.light,
            marginY: theme.spacing(3),
          })}
        />
        <List>
          {MenuLinks.map((button) => {
            if (button.logged && !isLogged) return null;
            return (
              <MenuMobileLinkComponent
                key={`${button.title}-mobile`}
                icon={button.icon}
                text={button.title}
                link={button.link}
                handleClick={handleLinkClick}
              />
            );
          })}
        </List>

        <Box sx={{ marginTop: "auto" }}>
          {isLogged ? (
            <LoggedMobile username={username} />
          ) : (
            <NotLoggedMobile handleClick={handleLinkClick} />
          )}
        </Box>
      </Box>
    </Drawer>
  );
};
