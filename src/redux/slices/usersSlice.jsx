// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  users: [],
  searchedUser: null,
  status: "idle",
};

export const createUser = createAsyncThunk("users/createUser", async (id) => {
  try {
    const res = await axios.put(
      `https://backend-algiii.onrender.com/api/user/${id}`
    );
    return res.data;
  } catch {
    toast.error(`ERROR: No se pudo crear el usuario`);
  }
});

export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  try {
    const res = await axios.get(
      `https://backend-algiii.onrender.com/api/user/${id}`
    );
    return res.data;
  } catch {
    toast.error(`ERROR: No se pudo obtener el usuario de ID ${id}`);
  }
});

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const res = await axios.get(`https://backend-algiii.onrender.com/api/user`);
    return res.data;
  } catch {
    toast.error(`ERROR: No se pudieron obtener los usuarios`);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    //* getUserById
    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
      state.searchedUser = payload;
      state.status = "succesful";
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getUserById.pending, (state) => {
      state.status = "loading";
    });
    //* getAllUsers
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.status = "succesful";
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const { setSearchedUser } = usersSlice.actions;
export default usersSlice.reducer;
