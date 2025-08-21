// Importes de terceros
import { configureStore } from '@reduxjs/toolkit'
// Importes propios
import usersSlice from './slices/usersSlice'

const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    usuarios: usersSlice,
  },
})

export default store
