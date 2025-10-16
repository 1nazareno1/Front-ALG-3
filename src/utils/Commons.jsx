import { CalendarMonth, Home, Link, Person, Search } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const NotificationMock = [
  {
    id: 1,
    mensaje: `Usuario X ha comentado tu post "Bienvenidos al Foro"`,
    url: "/post/1",
  },
  {
    id: 2,
    mensaje: `Tu post "Bienvenidos al Foro" fue cerrado`,
    url: "/post/1",
  },
  {
    id: 3,
    mensaje: `Usuario Y ha comentado tu post "Bienvenidos al Foro"`,
    url: "/post/1",
  },
  {
    id: 4,
    mensaje: `Usuario Z ha comentado tu post "Bienvenidos al Foro"`,
    url: "/post/1",
  },
  {
    id: 5,
    mensaje: `Usuario W ha comentado tu post "Bienvenidos al Foro"`,
    url: "/post/1",
  },
];

export const MenuLinks = [
  {
    title: "Inicio",
    icon: <Home />,
    link: "/home",
    logged: false,
  },
  {
    title: "Buscar",
    icon: <Search />,
    link: "/buscar",
    logged: false,
  },
  {
    title: "Calendario",
    icon: <CalendarMonth />,
    link: "/calendario",
    logged: false,
  },
  {
    title: "Mi perfil",
    link: "/perfil",
    icon: <AccountCircleIcon />,
    logged: true, // Solo para usuarios logueados
  },
  {
    title: "Ir a ISETA",
    icon: <Link />,
    link: "https://iseta.edu.ar/iseta/",
    logged: false,
  },
];

/**
 * Calcula y formatea el tiempo transcurrido desde una fecha en formato string.
 * @param {string} dateString - La fecha de creación en formato string (ej: "2024-12-17T03:24:00").
 * @returns {string} Una cadena de texto formateada como "Creado hace X tiempo".
 */
export function getTimeAgoFromString(dateString) {
  const dateInMillis = new Date(dateString).getTime();

  const now = new Date().getTime();
  const differenceInMs = now - dateInMillis;

  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  if (years > 0) {
    return `hace ${years} ${years === 1 ? "año" : "años"}`;
  } else if (months > 0) {
    return `hace ${months} ${months === 1 ? "mes" : "meses"}`;
  } else if (weeks > 0) {
    return `hace ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
  } else if (days > 0) {
    return `hace ${days} ${days === 1 ? "día" : "días"}`;
  } else if (hours > 0) {
    return `hace ${hours} ${hours === 1 ? "hora" : "horas"}`;
  } else if (minutes > 0) {
    return `hace ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  } else {
    return "hace un momento";
  }
}

export function processRegisterDate(registerDate) {
  const date = new Date(registerDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}-${month}-${year}`;
}

export class DebounceClass {
  constructor(debounce = 1000) {
    this.delay = debounce;
    this.timeoutId = null;
  }

  callback(callback) {
    this.clear();
    this.timeoutId = setTimeout(() => {
      callback();
      this.timeoutId = null;
    }, this.delay);
  }

  clear() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
