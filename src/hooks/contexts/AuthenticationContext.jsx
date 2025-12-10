import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCurrentSession,
  getUserSession,
} from "../../redux/slices/authSlice";
import { toast } from "sonner";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
  handleLogin: async () => {},
  userInfo: {
    email: null,
    isLogged: false,
    rol: null,
    userID: null,
    username: null,
  },
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: null,
    isLogged: false,
    rol: null,
    userID: null,
    username: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const res = await dispatch(getCurrentSession());
        if (res.payload) {
          setUserInfo({
            email: res.payload.email,
            isLogged: true,
            rol: res.payload.rol,
            userID: res.payload.id,
            username: res.payload.nombre_apellido,
          });
          login();
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const res = await dispatch(getUserSession({ email, password })).unwrap();
      if (res.payload) {
        setUserInfo({
          email: res.payload.email,
          isLogged: true,
          rol: res.payload.rol,
          userID: res.payload.id,
          username: res.payload.nombre_apellido,
        });
        login();
      }
    } catch {
      toast.error("Error al iniciar sesión. Inténtalo de nuevo.");
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = {
    handleLogin,
    isAuthenticated,
    isLoading,
    login,
    logout,
    userInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
