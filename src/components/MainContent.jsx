import { Box, CircularProgress } from "@mui/material";

function MainContent() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default MainContent;