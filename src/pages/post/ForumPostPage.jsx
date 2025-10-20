import { ArrowBack } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { PostTopContent } from "../../components/posts/PostTopContent";
import { UserCardComponent } from "../../components/posts/UserCardComponent";
import { PostBodyContent } from "../../components/posts/PostBodyContent";
import { ReportModal } from "../../components/modals/ReportModal";
import { useForumPostPage } from "./useForumPostPage";

export const ForumPostPage = () => {
  const {
    handleReport,
    handleReportModal,
    handleUserLike,
    loading,
    navigate,
    postData,
    reportModalOpen,
    searchedUser,
    setReportModalOpen,
    setUserModalOpen,
    upLg,
    userLike,
    userModalOpen,
  } = useForumPostPage();
  
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(3),
        margin: theme.spacing(3),
        [theme.breakpoints.down("lg")]: {
          gap: theme.spacing(6),
          margin: theme.spacing(2),
          marginRight: theme.spacing(10),
        },
        [theme.breakpoints.down("md")]: {
          gap: theme.spacing(1),
          margin: theme.spacing(2),
          marginRight: theme.spacing(4),
        },
      })}
    >
      <Box
        onClick={() => navigate(-1)}
        sx={{ cursor: "pointer", height: "max-content" }}
      >
        <ArrowBack
          sx={(theme) => ({ "&:hover": { color: theme.palette.primary.main } })}
        />
      </Box>
      {loading ? (
        <Box sx={{ margin: "40vh auto 0px auto" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(3),
              minWidth: "55%",
            })}
          >
            <PostTopContent
              handleReport={handleReportModal}
              postData={postData}
              setUserModalOpen={setUserModalOpen}
              upLg={upLg}
              userModalOpen={userModalOpen}
              userData={postData.user}
            />
            <PostBodyContent
              handleUserLike={handleUserLike}
              postData={postData}
              userLike={userLike}
            />
          </Box>
          {upLg && searchedUser ? (
            <UserCardComponent
              career={"Tec. Sup. en Alimentos"}
              likeCount={4}
              messageCount={32}
              postCount={1}
              title={postData.user.rol}
              username={postData.user.nombre_apellido}
              registerDate={postData.user.createdAt}
            />
          ) : null}
        </>
      )}
      {postData ? (
        <ReportModal
          handleReport={handleReport}
          open={reportModalOpen}
          postTitle={postData.titulo}
          setOpen={setReportModalOpen}
        />
      ) : null}
    </Box>
  );
};
