import { Box, Tooltip, Typography } from "@mui/material";
import { Flag } from "@mui/icons-material";
import { UserCardModalComponent } from "./UserCardModalComponent";
import { getTimeAgoFromString } from "../../utils/Commons";

export const PostTopContent = ({
  handleReport,
  navigate,
  postData,
  setUserModalOpen,
  upLg,
  userData,
  userModalOpen,
}) => {
  return (
    <>
      {userData ? (
        <>
          <Box>
            <Typography>{`General > Noticias • ${getTimeAgoFromString(
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
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
                onClick={() => handleReport(postData.id)}
              >
                <Flag />
              </Box>
            </Tooltip>
          </Box>
        </>
      ) : null}
    </>
  );
};
