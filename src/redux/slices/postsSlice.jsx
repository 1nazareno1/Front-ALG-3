// Importes de terceros
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  categoriesStatus: "idle",
  messages: [],
  messagesStatus: "idle",
  posts: [],
  postsCategories: [],
  postsStatus: "idle",
  reportStatus: "idle",
  results: [],
  searchedPost: {},
  searchStatus: "idle",
};

export const getPostCategories = createAsyncThunk(
  "posts/getPostCategories",
  async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/Tema/findAll`);
      return res.data;
    } catch {
      toast.error(`No se pudo obtener las categorias de los posts`);
    }
  }
);

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await axios.get(`http://localhost:5000/api/post/findAll`);
    return res.data;
  } catch {
    toast.error(`No se pudo obtener los posts`);
  }
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/post/delete/${postId}`,
        { withCredentials: true }
      );
      return res.data;
    } catch {
      toast.error(`No se pudo eliminar el post de id #${postId}`);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/postPost",
  async ({ title, body, authorId, categoryId }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/post/create`,
        {
          titulo: title,
          contenido: body,
          published: true,
          id_autor: Number(authorId),
          id_tema: Number(categoryId),
        },
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      console.error(`No se pudo crear el post`, err);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (postId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/post/findById/${postId}`
      );
      return res.data;
    } catch {
      toast.error(`No se pudo obtener el post de id #${postId}`);
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
      toast.error(`No se pudo obtener el post con titulo ${title}`);
    }
  }
);

export const getMessagesByPostId = createAsyncThunk(
  "posts/getMessagesByPostId",
  async (postId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/mensajes/findAllInPost/${postId}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
      if (String(err.status).startsWith("4")) {
        toast.error(`Hubo un error al cargar los mensajes del post`);
        return;
      }
      toast.error(`No se pudo obtener los mensajes del post de id #${postId}`);
    }
  }
);

export const postMessageInPost = createAsyncThunk(
  "posts/postMessageInPost",
  async ({ body, postId, userId }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/mensajes/create`,
        {
          contenido: body,
          id_autor: userId,
          id_post: postId,
          id_mensaje: null,
        },
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      toast.error(`No se pudo crear el mensaje`);
      console.error(err);
    }
  }
);

export const deleteMessageInPost = createAsyncThunk(
  "posts/deleteMessageInPost",
  async ({ messageId }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/mensajes/delete/${messageId}`,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      toast.error(`No se pudo eliminar el mensaje de id #${messageId}`);
      console.error(err);
    }
  }
);

export const report = createAsyncThunk(
  "posts/report",
  async ({ description, reporterId, reportTypeId, type }) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/reporte/create`,
        {
          descripcion: description,
          id_reportador: reporterId,
          id_type: reportTypeId,
          type: type,
        },
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      toast.error(`No se pudo enviar el reporte`);
      console.error(err);
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
      }),
      // createPost
      builder.addCase(createPost.pending, (state) => {
        state.postsStatus = "loading";
      }),
      builder.addCase(createPost.rejected, (state) => {
        state.postsStatus = "rejected";
      }),
      builder.addCase(createPost.fulfilled, (state) => {
        state.postsStatus = "succesful";
      }),
      // deletePost
      builder.addCase(deletePost.pending, (state) => {
        state.postsStatus = "loading";
      }),
      builder.addCase(deletePost.rejected, (state) => {
        state.postsStatus = "rejected";
      }),
      builder.addCase(deletePost.fulfilled, (state) => {
        state.postsStatus = "succesful";
      }),
      // getMessagesByPostId
      builder.addCase(getMessagesByPostId.pending, (state) => {
        state.messagesStatus = "loading";
      }),
      builder.addCase(getMessagesByPostId.rejected, (state) => {
        state.messagesStatus = "rejected";
      }),
      builder.addCase(getMessagesByPostId.fulfilled, (state, { payload }) => {
        state.messagesStatus = "succesful";
        state.messages = payload == undefined ? [] : payload;
      }),
      // postMessageInPost
      builder.addCase(postMessageInPost.pending, (state) => {
        state.messagesStatus = "loading";
      }),
      builder.addCase(postMessageInPost.rejected, (state) => {
        state.messagesStatus = "rejected";
      }),
      builder.addCase(postMessageInPost.fulfilled, (state) => {
        state.messagesStatus = "succesful";
      }),
      // deleteMessageInPost
      builder.addCase(deleteMessageInPost.pending, (state) => {
        state.messagesStatus = "loading";
      }),
      builder.addCase(deleteMessageInPost.rejected, (state) => {
        state.messagesStatus = "rejected";
      }),
      builder.addCase(deleteMessageInPost.fulfilled, (state) => {
        state.messagesStatus = "succesful";
      }),
      // report
      builder.addCase(report.pending, (state) => {
        state.reportStatus = "loading";
      }),
      builder.addCase(report.rejected, (state) => {
        state.reportStatus = "rejected";
      }),
      builder.addCase(report.fulfilled, (state) => {
        state.reportStatus = "succesful";
      });
  },
});

export const { resetResults } = postsSlice.actions;
export default postsSlice.reducer;
