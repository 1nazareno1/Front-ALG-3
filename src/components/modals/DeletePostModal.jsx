import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DeletePostModal = ({
  handleDelete,
  open,
  postId,
  postTitle,
  postsStatus,
  setOpen,
}) => {
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const handleDeleteClose = () => navigate("/inicio");
  const [succesfullyDeleted, setSuccesfullyDeleted] = useState(false);

  return (
    <>
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
            Estas a punto de eliminar el post{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              "{postTitle}"
            </Typography>
            . Esta acción es irreversible.
          </Typography>
          <Button
            alignItems="center"
            color="error"
            disabled={postsStatus === "loading"}
            onClick={() =>
              handleDelete({
                postId,
                afterAction: () => setSuccesfullyDeleted(true),
              })
            }
            variant="contained"
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
            }}
          >
            {postsStatus === "loading" ? (
              <CircularProgress size={20} sx={{ mt: 0.5 }} />
            ) : (
              "Eliminar"
            )}
          </Button>
        </Box>
      </Modal>{" "}
      <Modal open={succesfullyDeleted} onClose={handleDeleteClose}>
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
            Se borro el post{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              "{postTitle}"
            </Typography>{" "}
            con exito
          </Typography>
          <Button
            variant="contained"
            alignItems="center"
            color="error"
            onClick={handleDeleteClose}
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
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};
