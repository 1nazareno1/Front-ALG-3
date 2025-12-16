import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ReportMessageModal = ({
  open,
  setOpen,
  handleMessageReport,
  reportMessageData,
}) => {
  const [reportMotive, setReportMotive] = useState("");
  const { reportStatus } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!open) setReportMotive("");
  }, [open]);

  if (!reportMessageData) {
    return null;
  }

  const handleClose = () => setOpen(false);
  const { autor, contenido, id } = reportMessageData;

  return (
    <>
      {" "}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            left: "50%",
            p: 4,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 574,
          }}
        >
          <Typography sx={{ fontWeight: 400 }}>
            Estas a punto de reportar el siguiente mensaje de{" "}
            <Typography component={"span"} sx={{ fontWeight: 600 }}>
              {autor.nombre_apellido}
            </Typography>
          </Typography>
          <Box>
            <Card variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Typography sx={{ fontWeight: 400 }}>{contenido}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Typography sx={{ fontWeight: 400 }}>
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
            onClick={() => handleMessageReport({ id, reportMotive })}
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
