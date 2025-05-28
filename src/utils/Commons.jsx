import { CalendarMonth, Home, Link, Person, Search } from '@mui/icons-material'

export const MenuLinks = [
  {
    title: 'Inicio',
    icon: <Home />,
    link: '/',
    logged: false,
  },
  {
    title: 'Buscar',
    icon: <Search />,
    link: '/buscar',
    logged: false,
  },
  {
    title: 'Calendario',
    icon: <CalendarMonth />,
    link: '/calendario',
    logged: false,
  },
  {
    title: 'Ir a ISETA',
    icon: <Link />,
    link: '',
    logged: false,
  },
  {
    title: 'Mi perfil',
    icon: <Person />,
    link: '/mi-perfil',
    logged: true,
  },
]
