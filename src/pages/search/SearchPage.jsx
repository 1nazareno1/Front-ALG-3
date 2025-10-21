import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostByTitle, resetResults } from "../../redux/slices/postsSlice";
import { SearchResult } from "../../components/search/SearchResult";
import { toast } from "sonner";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Close } from "@mui/icons-material";

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchStatus, results } = useSelector((state) => state.posts);
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;
  const { upLg } = useWindowSize();

  useEffect(() => {
    if (results.length > 0) dispatch(resetResults());
    if (state?.query) {
      setInputValue(state.query);
      dispatch(getPostByTitle(state.query));
    }
  }, []);

  return (
    <Box mx={upLg ? 10 : 4} my={upLg ? 5 : 4}>
      <Typography variant="h5" gutterBottom mb={5}>
        Busqueda de Posts
      </Typography>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <TextField
          label="Nombre del tema"
          variant="outlined"
          fullWidth
          value={inputValue}
          slotProps={{
            input: {
              endAdornment: (
                <Box
                  mt={1}
                  sx={(theme) => ({
                    cursor: "pointer",
                    color:
                      inputValue.length > 0
                        ? theme.palette.common.dark
                        : theme.palette.secondary.dark,
                    "&:hover": {
                      color: inputValue.length > 0 && theme.palette.error.dark,
                    },
                  })}
                  onClick={() => setInputValue("")}
                >
                  <Close />
                </Box>
              ),
            },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchStatus !== "loading") {
              if (inputValue.trim().length >= 3) {
                dispatch(getPostByTitle(inputValue));
              } else toast.error("Ingrese al menos 3 caracteres");
            }
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={
            !(inputValue.trim().length >= 3) || searchStatus === "loading"
          }
          onClick={() => dispatch(getPostByTitle(inputValue))}
          sx={{ height: "56px" }}
        >
          <SearchIcon />
        </Button>
      </Box>
      {searchStatus === "idle" && (
        <Typography variant="body2" mt={2} color="textSecondary">
          Ingrese al menos 3 caracteres para buscar un post
        </Typography>
      )}
      {searchStatus === "loading" && (
        <Box display={"flex"} justifyContent={"center"} mt={8}>
          <CircularProgress />
        </Box>
      )}
      {searchStatus === "succesful" && results.length > 0 ? (
        <Box mt={5}>
          {results.map((post) => {
            return <SearchResult post={post} />;
          })}
          {results.map((post) => {
            return <SearchResult post={post} />;
          })}
          {results.map((post) => {
            return <SearchResult post={post} />;
          })}
        </Box>
      ) : null}
      {searchStatus === "succesful" && results.length === 0 && (
        <Typography variant="body2" mt={2} color="textSecondary">
          No se encontraron posts con ese titulo
        </Typography>
      )}
    </Box>
  );
};
