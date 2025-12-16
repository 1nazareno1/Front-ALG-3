// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  email: null,
  isLogged: false,
  registerStatus: "idle",
  rol: null,
  status: "idle",
  userID: null,
  username: null,
};

export const getUserSession = createAsyncThunk(
  "users/getUserSession",
  async ({ email, password }) => {
    try {
      await axios.post(
        "http://localhost:5000/api/guest/login",
        {
          email: email,
          contrasenia: password,
        },
        { withCredentials: true }
      );
      const res = await axios.get(
        "http://localhost:5000/api/user/actualAuthUser",
        { withCredentials: true }
      );
      return res.data;
    } catch {
      toast.error(`ERROR: No se pudo conectar el usuario`);
    }
  }
);

export const getCurrentSession = createAsyncThunk(
  "users/getCurrentSession",
  async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/user/actualAuthUser",
        { withCredentials: true }
      );
      return res.data;
    } catch {
      return null;
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ fullname, password, email, alias }) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/guest/register`, {
        nombre_apellido: fullname,
        alias: alias,
        alumno_iseta: false,
        carrera_iseta: "No especificada",
        email: email,
        contrasenia: password,
      });
      return res.data;
    } catch (err) {
      if (
        err.response?.data?.includes(
          "Unique constraint failed on the fields: (`email`)"
        )
      ) {
        toast.error(`Ya existe un usuario registrado con ese email`);
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
    // Declare a logout action and export it
    resetAuthState: (state) => {
      state.email = null;
      state.isLogged = false;
      state.userID = null;
      state.username = null;
    },
    logout: (state) => {
      state.email = null;
      state.isLogged = false;
      state.userID = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSession.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserSession.rejected, (state) => {
      state.isLogged = false;
      state.status = "rejected";
    });
    builder.addCase(getUserSession.fulfilled, (state, { payload }) => {
      const { id, nombre_apellido, email, rol } = payload;
      state.email = email;
      state.isLogged = true;
      state.rol = rol;
      state.status = "successful";
      state.userID = id;
      state.username = nombre_apellido;
    });
    builder.addCase(getCurrentSession.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCurrentSession.rejected, (state) => {
      state.isLogged = false;
      state.status = "rejected";
    });
    builder.addCase(getCurrentSession.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.status = "idle";
        return;
      }
      const { id, nombre_apellido, email, rol } = payload;
      state.isLogged = true;
      state.email = email;
      state.rol = rol;
      state.status = "successful";
      state.userID = id;
      state.username = nombre_apellido;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.registerStatus = "loading";
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registerStatus = "rejected";
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.registerStatus = "successful";
    });
  },
});

export const { logout, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
