import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export const CreateButton = ({ onClick = () => {}, text = "", disabled = false }) => {
  const { downMd } = useWindowSize();
  return (
    <Button
      disabled={disabled}
      variant="contained"
      onClick={onClick}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        height: "40px",
        marginLeft: downMd ? theme.spacing(2) : theme.spacing(0),
      })}
    >
      {" "}
      <Add />
      {text}
    </Button>
  );
};
