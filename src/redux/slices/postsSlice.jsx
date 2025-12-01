// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  posts: [],
  postsCategories: [],
  results: [],
  searchedPost: {},
  categoriesStatus: "idle",
  postsStatus: "idle",
  searchStatus: "idle",
};

export const getPostCategories = createAsyncThunk(
  "posts/getPostCategories",
  async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/Tema/findAll`
      );
      return res.data;
    } catch {
      toast.error(`ERROR: No se pudo obtener las categorias de los posts`);
    }
  }
);

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/post/findAll`
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
        `http://localhost:5000/api/post/findById/${postId}`
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
        `http://localhost:5000/api/post/findByTitle/${title}`
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
      state.postsStatus = "loading";
    }),
      builder.addCase(getPosts.rejected, (state) => {
        state.postsStatus = "rejected";
        state.posts = [];
      }),
      builder.addCase(getPosts.fulfilled, (state, { payload }) => {
        state.postsStatus = "succesful";
        state.posts = payload == undefined ? [] : payload;
      }),
      // getPostCategories
      builder.addCase(getPostCategories.pending, (state) => {
        state.categoriesStatus = "loading";
      }),
      builder.addCase(getPostCategories.rejected, (state) => {
        state.categoriesStatus = "rejected";
        state.postsCategories = [];
      }),
      builder.addCase(getPostCategories.fulfilled, (state, { payload }) => {
        state.categoriesStatus = "succesful";
        state.postsCategories = payload == undefined ? [] : payload;
      }),
      // getPostById
      builder.addCase(getPostById.pending, (state) => {
        state.postsStatus = "loading";
      }),
      builder.addCase(getPostById.rejected, (state) => {
        state.postsStatus = "rejected";
        state.searchedPost = {};
      }),
      builder.addCase(getPostById.fulfilled, (state, { payload }) => {
        state.postsStatus = "succesful";
        state.searchedPost = payload == undefined ? {} : payload;
      }),
      // getPostByTitle
      builder.addCase(getPostByTitle.pending, (state) => {
        state.searchStatus = "loading";
      }),
      builder.addCase(getPostByTitle.rejected, (state) => {
        state.searchStatus = "rejected";
        state.results = [];
      }),
      builder.addCase(getPostByTitle.fulfilled, (state, { payload }) => {
        state.searchStatus = "succesful";
        state.results = payload == undefined ? [] : payload;
      });
  },
});

export const { resetResults } = postsSlice.actions;
export default postsSlice.reducer;
