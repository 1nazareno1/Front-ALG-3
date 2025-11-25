// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  email: null,
  isLogged: false,
  registerStatus: "idle",
  status: "idle",
  token: null,
  userID: null,
  username: null,
};


export const getUserSession = createAsyncThunk(
  "users/getUserSession",
  async ({ email, password }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/guest/login`,
        {
          email: email,
          contrasenia: password, 
        }
      );
      return res.data;
    } catch {
      toast.error(`ERROR: No se pudo conectar el usuario`);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ fullname, password, email, alias }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/guest/register`,
        {
          nombre_apellido: fullname,
          alias: alias,
          alumno_iseta: false,
          carrera_iseta: "No especificada",
          email: email,
          contrasenia: password,
        }
      );
      return res.data;
    } catch (err) {
      if (
        err.response?.data?.message?.includes(
          "Unique constraint failed on the fields: (`email`)"
        )
      ) {
        toast.error(`ERROR: El email ya se encuentra registrado`);
      } else {
        toast.error(
          `Error al registrar el usuario, inténtalo de nuevo más tarde`
        );
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.isLogged = false;
      state.token = null;
      state.userID = null;
      state.username = null;
      toast.success("Sesión cerrada con éxito");
    },
  },
  extraReducers: (builder) => {

    builder.addCase(getUserSession.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserSession.rejected, (state) => {
      state.isLogged = false;
      state.token = null;
      state.status = "rejected";
    });
    builder.addCase(getUserSession.fulfilled, (state, { payload }) => {
      console.log(payload);
      const { id, nombre_apellido, email } = payload;
      state.email = email;
      state.isLogged = true;
      state.status = "successful";
      state.token = Math.random() * 1000000; 
      state.userID = id;
      state.username = nombre_apellido;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.registerStatus = "loading";
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registerStatus = "rejected";
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.registerStatus = "successful";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;