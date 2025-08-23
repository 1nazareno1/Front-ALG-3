// Importes de terceros
import { configureStore } from '@reduxjs/toolkit'
// Importes propios
import usersSlice from './slices/usersSlice'
import authSlice from './slices/authSlice'

const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    usuarios: usersSlice,
    auth: authSlice,
  },
})

export default store
