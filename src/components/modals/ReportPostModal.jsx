import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";

export const ReportPostModal = ({
  open,
  setOpen,
  handleReport,
  postTitle,
  postsStatus,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      {" "}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 574,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: 400 }}>
            Estas a punto de reportar el post{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              "{postTitle}"
            </Typography>
          </Typography>
          <Button
            variant="contained"
            alignItems="center"
            color="error"
            onClick={() => handleReport()}
            sx={{
              alignSelf: "flex-end",
              display: "flex",
              borderRadius: 2,
              height: 40,
              width: 200,
              mt: 4,
              fontWeight: 400,
              fontsize: 18,
              textTransform: "none",
            }}
          >
            {postsStatus === "loading" ? (
              <CircularProgress size={20} sx={{ mt: 0.5 }} />
            ) : (
              "Reportar"
            )}
          </Button>
        </Box>
      </Modal>
      <Modal open={false} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 574,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: 400 }}>
            Estas a punto de reportar el post{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              "{postTitle}"
            </Typography>
          </Typography>
          <Button
            variant="contained"
            alignItems="center"
            color="error"
            onClick={() => handleReport()}
            sx={{
              alignSelf: "flex-end",
              display: "flex",
              borderRadius: 2,
              height: 40,
              width: 200,
              mt: 4,
              fontWeight: 400,
              fontsize: 18,
              textTransform: "none",
            }}
          >
            {postsStatus === "loading" ? (
              <CircularProgress size={20} sx={{ mt: 0.5 }} />
            ) : (
              "Reportar"
            )}
          </Button>
        </Box>
      </Modal>
    </>
  );
};
