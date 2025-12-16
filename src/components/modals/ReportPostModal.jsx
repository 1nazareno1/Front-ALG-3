import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ReportPostModal = ({
  open,
  setOpen,
  handlePostReport,
  reportPostData,
}) => {
  const [reportMotive, setReportMotive] = useState("");
  const { reportStatus } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!open) setReportMotive("");
  }, [open]);

  if (!reportPostData) {
    return null;
  }

  const handleClose = () => setOpen(false);
  const { id, titulo } = reportPostData;

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
              "{titulo}"
            </Typography>
          </Typography>
          <Typography sx={{ fontWeight: 400, my: 2 }}>
            Por favor, indícanos el motivo del reporte:
          </Typography>
          <TextField
            multiline
            minRows={1}
            placeholder="Minimo 10 caracteres"
            value={reportMotive}
            onChange={(e) => setReportMotive(e.target.value)}
          />
          <Button
            disabled={reportMotive.trim().length < 10}
            variant="contained"
            alignItems="center"
            color="error"
            onClick={() => handlePostReport({ postId: id, reportMotive })}
            sx={{
              alignSelf: "flex-end",
              display: "flex",
              borderRadius: 2,
              height: 40,
              width: 200,
              mt: 2,
              fontWeight: 400,
              fontsize: 18,
              textTransform: "none",
              "&:hover": { backgroundColor: "error.dark" },
            }}
          >
            {reportStatus === "loading" ? (
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
