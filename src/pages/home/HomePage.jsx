import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostCategories } from "../../redux/slices/postsSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Header } from "../../components/commons/Header";
import { ForumCategories } from "../../components/forums/ForumCategories";

export const HomePage = () => {
  const { upLg } = useWindowSize();
  const dispatch = useDispatch();
  const { postsCategories, categoriesStatus } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(getPostCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const windowWidth = window.innerWidth;

  return (
    <Box>
      <Header upLg={upLg} />
      <Box
        sx={(theme) => ({
          display: "flex",
          margin: upLg
            ? theme.spacing(3)
            : `${theme.spacing(2)} ${theme.spacing(0)}`,
          justifyContent: "space-evenly",
          gap: theme.spacing(1),
        })}
      >
        {categoriesStatus == "succesful" ? (
          <ForumCategories categories={postsCategories} />
        ) : (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop={24}
            gap={3}
          >
            <CircularProgress />
            <Typography fontSize={12}>Cargando categorias...</Typography>
          </Box>
        )}
        {upLg ? (
          <Box width={windowWidth > 1600 ? "40%" : "25%"}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showTz=0&showTitle=0&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230b8043"
              width={"100%"}
              height={"450px"}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
