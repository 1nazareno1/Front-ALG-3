// Importes de terceros
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const initialState = {
  isLogged: false,
  status: 'idle',
  token: null,
  userID: null,
  username: null,
}

export const getUserSession = createAsyncThunk(
  'users/getUserSession',
  async (username, password) => {
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
      const data = { id: 1, token: Math.random() }
      await new Promise((resolve) => setTimeout(resolve, 4000))
      return data
    } catch {
      toast.error(`ERROR: No se pudo conectar el usuario`)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getUserSession
    builder.addCase(getUserSession.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(getUserSession.rejected, (state) => {
        state.isLogged = false
        state.token = null
        state.status = 'rejected'
      }),
      builder.addCase(getUserSession.fulfilled, (state, { payload }) => {
        console.log(payload)
        // state.token = payload.token * 1000000
        // state.isLogged = true
        // state.userID = 1
        // state.username = 'UsuarioPrueba'
        // state.status = 'succesful'
      })
  },
})

export default authSlice.reducer
