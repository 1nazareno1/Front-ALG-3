// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  posts: [],
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await axios.get(
      `https://backend-algiii.onrender.com/api/Tema/findAll`
    );
    return res.data;
  } catch {
    toast.error(`ERROR: No se pudo obtener los posts`);
  }
});

const postsSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getPosts
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(getPosts.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(getPosts.rejected, (state) => {
        state.status = "rejected";
      }),
      builder.addCase(getPosts.fulfilled, (state, { payload }) => {
        state.status = "succesful";
        state.posts = payload;
      });
  },
});

export default postsSlice.reducer;
