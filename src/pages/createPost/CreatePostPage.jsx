import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export const CreatePostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { forumId } = state || undefined;

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
          <TextField fullWidth margin="normal" placeholder="Título del post" />
          <Typography fontWeight={500} fontSize={16} my={1}>
            Categoria
          </Typography>
          <Select
            labelId="select-label"
            defaultValue={forumId || ""}
            sx={{ maxWidth: 200 }}
          >
            <MenuItem value={1}>Noticias</MenuItem>
            <MenuItem value={2}>Eventos</MenuItem>
            <MenuItem value={3}>General</MenuItem>
          </Select>
          <Typography fontWeight={500} fontSize={16} mt={2}>
            Cuerpo del post
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            multiline
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            rows={6}
          />
          <Button
            color="primary"
            disabled={false}
            sx={{ px: 5, maxWidth: "200px", alignSelf: "flex-end", mt: 2 }}
            variant="contained"
          >
            Crear Post
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};
