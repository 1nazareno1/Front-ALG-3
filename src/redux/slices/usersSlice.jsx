// Importes de terceros
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
// Importes propios

const initialState = {
  user: {},
}

export const createUser = createAsyncThunk(
  'users/createUser',
  async (nombreCompleto, email, rol = 'USUARIO', activo = true) => {
    try {
      const res = await axios.put(
        `https://backend-algiii.onrender.com/api/user/${id}`
      )
      return res.data
    } catch {
      toast.error(`ERROR: No se pudo crear el usuario`)
    }
  }
)

export const getUserById = createAsyncThunk('users/getUserById', async (id) => {
  try {
    const res = await axios.get(
      `https://backend-algiii.onrender.com/api/user/${id}`
    )
    return res.data
  } catch {
    toast.error(`ERROR: No se pudo obtener el usuario de ID ${id}`)
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // addCategory
    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
      state.user = payload
    })
  },
})

export default usersSlice.reducer
