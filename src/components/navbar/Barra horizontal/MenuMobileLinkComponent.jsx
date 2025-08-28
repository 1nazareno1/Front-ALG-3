import { ListItem, ListItemIcon, Typography } from '@mui/material'

export const MenuMobileLinkComponent = ({ icon, text }) => {
  return (
    <ListItem button>
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
