import { Box, Tooltip, Typography } from "@mui/material";
import { Delete, Flag } from "@mui/icons-material";
import { UserCardModalComponent } from "./UserCardModalComponent";
import { getTimeAgoFromString } from "../../utils/Commons";
import { useAuth } from "../../hooks/contexts/AuthenticationContext";
import { ShareButton } from "../commons/ShareButton";

export const PostTopContent = ({
  handleDeleteModal,
  handleOpenReportPostModal,
  navigate,
  postData,
  setUserModalOpen,
  upLg,
  userData,
  userModalOpen,
}) => {
  const { userInfo } = useAuth();
  return (
    <>
      {userData ? (
        <>
          <Box>
            <Typography>{`${getTimeAgoFromString(
              postData.createdAt
            )}`}</Typography>{" "}
            {!upLg ? (
              <UserCardModalComponent
                career={"Tec. Sup. en Alimentos"}
                likeCount={4}
                messageCount={32}
                navigate={navigate}
                open={userModalOpen}
                postCount={1}
                registerDate={userData.createdAt}
                setOpen={setUserModalOpen}
                title={userData.rol}
                userId={userData.id}
                username={userData.nombre_apellido}
              />
            ) : null}
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
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
              {postData.titulo}
            </Typography>{" "}
            <Box display={"flex"}>
              <Tooltip placement={"top"} title="Denunciar post">
                <Box
                  sx={(theme) => ({
                    cursor: "pointer",
                    transition: "ease-in .1s",
                    "&:hover": {
                      color: theme.palette.error.main,
                      transform: "translateY(-2.5px)",
                    },
                  })}
                  onClick={() => handleOpenReportPostModal()}
                >
                  <Flag />
                </Box>
              </Tooltip>
              {userInfo?.userID == postData.id_autor ||
              userInfo.rol == "ADMIN" ||
              userInfo.rol == "MODERADOR" ? (
                <Tooltip placement={"top"} title="Eliminar post">
                  <Box
                    sx={(theme) => ({
                      cursor: "pointer",
                      transition: "ease-in .1s",
                      "&:hover": {
                        color: theme.palette.error.main,
                        transform: "translateY(-2.5px)",
                      },
                    })}
                    onClick={() => handleDeleteModal()}
                  >
                    <Delete />
                  </Box>
                </Tooltip>
              ) : null}
              <ShareButton title={postData.titulo} />
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
};
