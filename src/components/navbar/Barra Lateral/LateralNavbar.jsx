import { Box, Typography } from "@mui/material";
import { LinkButton, StyledNavbar } from "./StyledComponents";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { MenuLinks } from "../../../utils/Commons";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useSelector } from "react-redux";
import { useSelector } from "react-redux";

export const LateralNavbar = () => {
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const [showText, setShowText] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const { upLg } = useWindowSize();
  const { isLogged, userID } = useSelector((state) => state.auth);

  if (!upLg) return null;

  const handleMouseEnter = () => {
    setExpandedNavbar(true);
    timeoutRef.current = setTimeout(() => {
      setShowText(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowText(false);
    setExpandedNavbar(false);
  };

  return (
    <StyledNavbar
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={(theme) => ({
        background: theme.palette.primary.light,
        borderRight: `1px solid ${theme.palette.secondary.light}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 90px)",
        width: "78px",
        paddingTop: theme.spacing(2),
        gap: theme.spacing(3),
      })}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {MenuLinks.map((button) => {
          const { link, title, icon } = button;
          if (!isLogged && button.logged) return;
          return (
            <LinkButton
              button={button}
              className="button"
              key={title + "-LateralNavbar"}
              pathname={pathname}
              expandednavbar={expandedNavbar ? 1 : 0}
              onClick={() => {
                const url = link == "/perfil" ? link + `/${userID}` : link;
                if (pathname.includes(url)) return;
                if (url.includes("http")) {
                  window.open(url, "_blank");
                  return;
                }
                navigate(url);
              }}
            >
              {icon}
              <Typography
                className="text"
                sx={{
                  display: "none",
                  transitionDelay: "0.3s",
                  fontWeight: pathname.includes(link) ? 800 : 400,
                }}
              >
                {showText ? title : ""}
              </Typography>
            </LinkButton>
          );
        })}
      </Box>
    </StyledNavbar>
  );
};
