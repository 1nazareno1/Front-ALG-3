import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getUserById, setSearchedUser } from "../../redux/slices/usersSlice";
import { toast } from "sonner";
import { deletePost, getPostById } from "../../redux/slices/postsSlice";

export const useForumPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [userLike, setUserLike] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { userID } = useSelector((state) => state.auth);
  const { users, searchedUser } = useSelector((state) => state.usuarios);
  const { postsStatus } = useSelector((state) => state.posts);
  const { upLg } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const userLikes = Math.random() < 0.5 ? [1, 2, 3, 4, 5] : [];
      try {
        if (!state) {
          const postId = location.pathname.split("/post/")[1];
          const postAction = await dispatch(getPostById(postId));
          const fetchedPost = postAction.payload;

          if (!fetchedPost) {
            return navigate("/inicio");
          }

          const user = await dispatch(getUserById(fetchedPost.id_autor));
          setPostData({ ...fetchedPost, user: user.payload, likes: userLikes });
          setLoading(false);
        } else {
          if (state.id_autor) {
            let user = users.find((u) => u.id == state.id_autor);
            if (user) {
              dispatch(setSearchedUser(user));
            } else {
              const fetchedUser = await dispatch(getUserById(state.id_autor));
              user = fetchedUser.payload;
              dispatch(setSearchedUser(user));
            }
            setPostData({
              ...state,
              user: user,
              likes: userLikes,
            });
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Ocurrió un error al cargar los datos:", error);
        toast.error("No se pudo cargar la información del post.");
        navigate("/");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postData.likes && postData.likes.includes(userID)) {
      setUserLike(true);
    }
  }, [userID, postData]);

  const handleUserLike = () => {
    if (!userID) {
      toast.error("Debes estar logueado para dar me gusta");
      return;
    }
    if (userLike) {
      const newLikes = postData.likes.filter((like) => like !== userID);
      setPostData({
        ...postData,
        likes: newLikes,
      });
      toast.success("Has dado me gusta a este post");
    } else {
      const newLikes = [...postData.likes, userID];
      setPostData({
        ...postData,
        likes: newLikes,
      });
    }
    setUserLike(!userLike);
  };

  const handleReportModal = () => {
    if (!userID) {
      toast.error("Debes estar logueado para reportar un post");
      return;
    } else setReportModalOpen(true);
  };

  const handleReport = async () => {
    setReportModalOpen(false);
  };

  const handleDeleteModal = () => {
    if (!userID) {
      toast.error("Debes estar logueado para eliminar un post");
      return;
    } else setDeleteModalOpen(true);
  };

  const handleDelete = async ({ postId, afterAction = () => {} }) => {
    try {
      await dispatch(deletePost(postId));
      setDeleteModalOpen(false);
      afterAction();
    } catch {
      console.error("Ocurrió un error al eliminar el post");
    }
  };

  return {
    deleteModalOpen,
    handleDelete,
    handleDeleteModal,
    handleReport,
    handleReportModal,
    handleUserLike,
    loading,
    navigate,
    postData,
    postsStatus,
    reportModalOpen,
    searchedUser,
    setDeleteModalOpen,
    setReportModalOpen,
    setUserModalOpen,
    upLg,
    userLike,
    userModalOpen,
  };
};
