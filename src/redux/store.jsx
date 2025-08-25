// Importes de terceros
import { configureStore } from "@reduxjs/toolkit";
// Importes propios
import usersSlice from "./slices/usersSlice";
import postsSlice from "./slices/postsSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    usuarios: usersSlice,
    auth: authSlice,
    posts: postsSlice,
  },
});

export default store;
