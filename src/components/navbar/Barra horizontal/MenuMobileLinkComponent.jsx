import { ListItem, ListItemIcon, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const MenuMobileLinkComponent = ({ icon, text, link }) => {
  const navigate = useNavigate();

  return (
    <ListItem button onClick={() => navigate(link)}>
      <ListItemIcon
        sx={(theme) => ({ color: 'white', minWidth: theme.spacing(6) })}
      >
        {icon}
      </ListItemIcon>
      <Typography
        sx={(theme) => ({
          color: 'white',
          fontSize: theme.spacing(3),
          userSelect: 'none',
        })}
      >
        {text}
      </Typography>
    </ListItem>
  )
}