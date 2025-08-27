// Importes de terceros
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const initialState = {
  email: null,
  isLogged: false,
  status: 'idle',
  token: null,
  userID: null,
  username: null,
}

export const getUserSession = createAsyncThunk(
  'users/getUserSession',
  async () => {
    try {
      const res = await axios.get(
        `https://backend-algiii.onrender.com/api/user/1`
        // {
        //   headers: {
        //     Accept: '*/*',
        //     'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        //   },
        // }
      )
      return res.data
    } catch {
      toast.error(`ERROR: No se pudo conectar el usuario`)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // Declare a logout action and export it
    logout: (state) => {
      state.email = null
      state.isLogged = false
      state.token = null
      state.userID = null
      state.username = null
      toast.success('Sesión cerrada con éxito')
    },
  },
  extraReducers: (builder) => {
    // getUserSession
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(getUserSession.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(getUserSession.rejected, (state) => {
        state.isLogged = false
        state.token = null
        state.status = 'rejected'
      }),
      builder.addCase(getUserSession.fulfilled, (state, { payload }) => {
        const { id, nombre_apellido, email } = payload
        state.email = email
        state.isLogged = true
        state.status = 'succesful'
        state.token = Math.random() * 1000000
        state.userID = id
        state.username = nombre_apellido
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
