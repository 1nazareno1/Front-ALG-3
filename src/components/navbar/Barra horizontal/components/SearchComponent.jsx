import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <TextField
      size="small"
      placeholder="Buscar..."
      variant="outlined"
      sx={{ background: "white", borderRadius: 1 }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && inputValue.trim().length >= 3) {
          setInputValue("");
          navigate(`/buscar`, { state: { query: inputValue } });
        }
      }}
      InputProps={{
        startAdornment: <Search sx={{ color: "grey.500", mr: 1 }} />,
      }}
    />
  );
};
