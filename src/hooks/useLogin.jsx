import { useDispatch, useSelector } from "react-redux";

export const useLogin = () => {
  const { status: loginStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    try {
      await dispatch(getUserSession({ email, password })).unwrap();
    } catch {
      toast.error("Error al iniciar sesión");
    }
  };

  return { handleLogin, loginStatus };
};
