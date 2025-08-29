// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  posts: [],
  searchedPost: {},
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await axios.get(
      `https://backend-algiii.onrender.com/api/post/findAll`
    );
    return res.data;
  } catch {
    toast.error(`ERROR: No se pudo obtener los posts`);
  }
});

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (postId) => {
    try {
      const res = await axios.get(
        `https://backend-algiii.onrender.com/api/post/findById/${postId}`
      );
      return res.data;
    } catch {
      toast.error(`ERROR: No se pudo obtener el post #${postId}`);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
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
      }),
      // getPostById
      builder.addCase(getPostById.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(getPostById.rejected, (state) => {
        state.status = "rejected";
      }),
      builder.addCase(getPostById.fulfilled, (state, { payload }) => {
        state.status = "succesful";
        state.searchedPost = payload;
      });
  },
});

export default postsSlice.reducer;
