import { ArrowBack } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { DeletePostModal } from "../../components/modals/DeletePostModal";
import { PostBodyContent } from "../../components/posts/PostBodyContent";
import { PostTopContent } from "../../components/posts/PostTopContent";
import { ReportPostModal } from "../../components/modals/ReportPostModal";
import { useForumPostPage } from "./useForumPostPage";
import { UserCardComponent } from "../../components/posts/UserCardComponent";
import { ReportMessageModal } from "../../components/modals/ReportMessageModal";
import { DeleteMessageModal } from "../../components/modals/DeleteMessageModal";

export const ForumPostPage = () => {
  const {
    deleteMessageData,
    deleteMessageModalOpen,
    handleDelete,
    handleDeleteMessage,
    handleDeleteModal,
    handleMessageReport,
    handleOpenMessageDeleteModal,
    handleOpenMessageReportModal,
    handlePostReport,
    handleOpenReportPostModal,
    handleUserLike,
    loading,
    messagesStatus,
    navigate,
    postData,
    postsStatus,
    reportMessageData,
    reportMessageModalOpen,
    reportModalOpen,
    reportPostData,
    searchedUser,
    setDeleteMessageModalOpen,
    setPostData,
    setReportMessageModalOpen,
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
        paddingTop: theme.spacing(3),
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
              width: "100%",
            })}
          >
            <PostTopContent
              handleDeleteModal={handleDeleteModal}
              handleOpenReportPostModal={handleOpenReportPostModal}
              navigate={navigate}
              postData={postData}
              setUserModalOpen={setUserModalOpen}
              upLg={upLg}
              userData={postData.user}
              userModalOpen={userModalOpen}
            />
            <PostBodyContent
              handleOpenMessageDeleteModal={handleOpenMessageDeleteModal}
              handleOpenMessageReportModal={handleOpenMessageReportModal}
              handleUserLike={handleUserLike}
              messagesStatus={messagesStatus}
              navigate={navigate}
              postData={postData}
              setPostData={setPostData}
              userLike={userLike}
            />
          </Box>
          {upLg && searchedUser ? (
            <UserCardComponent
              career={"Tec. Sup. en Alimentos"}
              likeCount={4}
              messageCount={32}
              postCount={1}
              navigate={navigate}
              registerDate={postData.user.createdAt}
              title={postData.user.rol}
              userId={searchedUser.id}
              username={postData.user.nombre_apellido}
            />
          ) : null}
        </>
      )}
      {postData ? (
        <>
          <DeletePostModal
            handleDelete={handleDelete}
            open={deleteMessageModalOpen}
            postId={postData.id}
            postTitle={postData.titulo}
            setOpen={setDeleteMessageModalOpen}
            postsStatus={postsStatus}
          />
          <ReportPostModal
            handlePostReport={handlePostReport}
            open={reportModalOpen}
            setOpen={setReportModalOpen}
            reportPostData={reportPostData}
          />
          <DeleteMessageModal
            open={deleteMessageModalOpen}
            setOpen={setDeleteMessageModalOpen}
            handleDeleteMessage={handleDeleteMessage}
            deleteMessageData={deleteMessageData}
          />
          <ReportMessageModal
            open={reportMessageModalOpen}
            setOpen={setReportMessageModalOpen}
            handleMessageReport={handleMessageReport}
            reportMessageData={reportMessageData}
          />
        </>
      ) : null}
    </Box>
  );
};
