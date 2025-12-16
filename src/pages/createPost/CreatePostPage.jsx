import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostCategories } from "../../redux/slices/postsSlice";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";
import { toast } from "sonner";

export const CreatePostPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const forumId = state?.forumId;
  const { isAuthenticated, isLoading, userInfo } = useAuth();
  const [categories, setCategories] = useState([]);
  const { categoriesStatus, postsCategories, postsStatus } = useSelector(
    (state) => state.posts
  );
  const [postData, setPostData] = useState({
    title: "",
    categoryId: forumId || "",
    body: "",
  });

  useEffect(() => {
    const loadCategories = async () => {
      try {
        await dispatch(getPostCategories()).unwrap();
      } catch (error) {
        console.error("Error loading categories:", error);
        return navigate(-1);
      }
    };

    if (!postsCategories || postsCategories.length === 0) {
      loadCategories();
    }
  }, []);

  useEffect(() => {
    if (postsCategories && postsCategories.length > 0) {
      const options = postsCategories.map((category) => ({
        value: category.id,
        label: category.nombre,
      }));
      setCategories(options);
    }
  }, [postsCategories, setCategories]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.info("Debes iniciar sesión para crear un post");
      navigate("/login", { state: { from: "/crear-post", forumId: forumId } });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(
        createPost({ ...postData, authorId: userInfo.userID })
      ).unwrap();
      toast.success("Post creado con éxito");
      navigate(`/foro/${postData.categoryId}`);
    } catch (error) {
      console.error("Error al crear el post:", error);
    }
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(3),
        margin: theme.spacing(3),
        [theme.breakpoints.down("lg")]: {
          gap: theme.spacing(6),
          margin: theme.spacing(2),
          marginRight: theme.spacing(10),
        },
        [theme.breakpoints.down("md")]: {
          gap: theme.spacing(1),
          margin: theme.spacing(2),
          marginRight: theme.spacing(4),
        },
      })}
    >
      <Box
        onClick={() => navigate(-1)}
        sx={{ cursor: "pointer", height: "max-content" }}
      >
        <ArrowBack
          sx={(theme) => ({ "&:hover": { color: theme.palette.primary.main } })}
        />
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          minWidth: "95%",
          gap: theme.spacing(3),
        })}
      >
        {" "}
        <Typography
          fontSize={"40px"}
          fontWeight={700}
          sx={(theme) => ({
            lineHeight: 1.1,
            [theme.breakpoints.down("lg")]: {
              lineHeight: 1,
              fontSize: "32px",
            },
          })}
        >
          Crear nuevo post
        </Typography>
        <FormControl
          fullWidth
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontWeight={500} fontSize={16}>
            Título
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            name="title"
            onChange={handleChange}
            placeholder="Título del post"
            value={postData.title}
          />
          <Typography fontWeight={500} fontSize={16} my={1}>
            Categoria
          </Typography>
          <Select
            defaultValue={forumId || ""}
            disabled={
              categoriesStatus === "loading" || postsCategories.length === 0
            }
            labelId="select-label"
            name="categoryId"
            onChange={handleChange}
            sx={{ maxWidth: 200 }}
            value={postData.categoryId}
          >
            {categories.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
          <Typography fontWeight={500} fontSize={16} mt={2}>
            Cuerpo del post
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            multiline
            name="body"
            onChange={handleChange}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            rows={6}
            value={postData.body}
          />
          <Button
            color="primary"
            disabled={
              postData.title.length < 8 ||
              postData.body.length < 30 ||
              postData.categoryId === "" ||
              postsStatus === "loading"
            }
            onClick={handleSubmit}
            sx={{ px: 5, maxWidth: "200px", alignSelf: "flex-end", mt: 2 }}
            variant="contained"
          >
            {postsStatus !== "loading" ? (
              "Crear Post"
            ) : (
              <CircularProgress size={16} color="secondary" />
            )}
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
