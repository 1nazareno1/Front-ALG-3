import { Box, Button, useMediaQuery, useTheme, CircularProgress, Typography  } from '@mui/material'
import { Link } from 'react-router-dom'
import { UserCardComponent } from '../../components/posts/UserCardComponent'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ForumPosts } from "../../components/forums/ForumPosts";
import { getPosts } from "../../redux/slices/postsSlice";
import { useWindowSize } from "../../hooks/useWindowSize";

export const HomePage = () => {
  const { upLg, downMd } = useWindowSize();
  const dispatch = useDispatch();
  const { posts, status: postsStatus } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box
        sx={(theme) => ({
          alignItems: "center",
          background: theme.palette.secondary.light,
          display: "flex",
          flexDirection: !upLg ? "column" : "row",
          gap: !upLg ? theme.spacing(2) : theme.spacing(5),
          height: theme.spacing(30),
          justifyContent: "space-evenly",
          padding: !upLg ? theme.spacing(5) : theme.spacing(2),
          width: upLg ? "calc(100vw - 78px)" : "100vw",
        })}
      >
        <img
          src="/iseta.png"
          style={{
            width: "100%",
            maxWidth: !upLg ? "400px" : "300px",
            marginLeft: !upLg ? "0px" : "16px",
          }}
        />
        <Box>
          <Typography fontSize={!upLg ? 18 : 32} fontWeight={500}>
            Bienvenidos al foro de Iseta
          </Typography>
          <Typography fontSize={!upLg ? 11 : 13}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ipsa,
            assumenda reiciendis eos accusantium expedita molestias!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          margin: downMd
            ? `${theme.spacing(2)} ${theme.spacing(0)}`
            : theme.spacing(2),
          gap: theme.spacing(1),
          justifyContent: "space-evenly",
        })}
      >
        {postsStatus == "succesful" ? (
          <ForumPosts posts={posts} />
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
            <Typography fontSize={12}>Cargando posts...</Typography>
          </Box>
        )}
        {upLg ? (
          <Box>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showTz=0&showTitle=0&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230b8043"
              // style="border:solid 1px #777"
              width="350"
              height="350"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
