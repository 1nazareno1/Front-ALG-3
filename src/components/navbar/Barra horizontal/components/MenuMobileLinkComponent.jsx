import { ListItem, ListItemIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MenuMobileLinkComponent = ({ icon, text, handleClick, link }) => {
  return (
    <ListItem
      button
      onClick={() => handleClick(link)}
      sx={{ cursor: "pointer" }}
    >
      <ListItemIcon
        sx={(theme) => ({ color: "white", minWidth: theme.spacing(6) })}
      >
        {icon}
      </ListItemIcon>
      <Typography
        sx={(theme) => ({
          color: "white",
          fontSize: theme.spacing(3),
          userSelect: "none",
        })}
      >
        {text}
      </Typography>
    </ListItem>
  );
};
