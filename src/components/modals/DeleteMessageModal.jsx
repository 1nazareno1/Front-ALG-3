import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const DeleteMessageModal = ({
  open,
  setOpen,
  handleDeleteMessage,
  deleteMessageData,
}) => {
  const { messagesStatus } = useSelector((state) => state.posts);
  const { userID } = useSelector((state) => state.auth);

  if (!deleteMessageData) {
    return null;
  }

  const handleClose = () => setOpen(false);
  const { autor, contenido, id } = deleteMessageData;

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
            Estas a punto de borrar el siguiente mensaje{" "}
            {userID == autor.id ? (
              ""
            ) : (
              <>
                de{" "}
                <Typography component={"span"} sx={{ fontWeight: 600 }}>
                  {autor.nombre_apellido}
                </Typography>
              </>
            )}
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
          <Typography sx={{ fontWeight: 400, textAlign: "end" }}>
            Esta acción es irreversible. ¿Deseas continuar?
          </Typography>
          <Button
            variant="contained"
            alignItems="center"
            color="error"
            onClick={() => handleDeleteMessage({ messageId: id })}
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
            {messagesStatus === "loading" ? (
              <CircularProgress size={20} sx={{ mt: 0.5 }} />
            ) : (
              "Borrar"
            )}
          </Button>
        </Box>
      </Modal>
    </>
  );
};
