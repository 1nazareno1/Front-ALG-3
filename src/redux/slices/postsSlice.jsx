// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  posts: [],
  results: [],
  searchedPost: {},
  status: "idle",
  searchStatus: "idle",
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

export const getPostByTitle = createAsyncThunk(
  "posts/getPostByTitle",
  async (title) => {
    try {
      const res = await axios.get(
        `https://backend-algiii.onrender.com/api/post/findByTitle/${title}`
      );
      return res.data;
    } catch {
      toast.error(`ERROR: No se pudo obtener el post con titulo ${title}`);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.searchStatus = "idle";
    },
  },
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
        state.posts = payload || [];
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
    // getPostByTitle
    builder.addCase(getPostByTitle.pending, (state) => {
      state.searchStatus = "loading";
    }),
      builder.addCase(getPostByTitle.rejected, (state) => {
        state.searchStatus = "rejected";
      }),
      builder.addCase(getPostByTitle.fulfilled, (state, { payload }) => {
        state.searchStatus = "succesful";
        state.results = payload;
      });
  },
});

export const { resetResults } = postsSlice.actions;
export default postsSlice.reducer;
