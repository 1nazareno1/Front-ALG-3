import { Box } from "@mui/material";
import { MainNavbar } from "../navbar/Barra horizontal/MainNavbar";
import { LateralNavbar } from "../navbar/Barra Lateral/LateralNavbar";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Interface = ({ children }) => {
  const { upLg } = useWindowSize();

  return (
    <>
      <MainNavbar />
      <Box display={"flex"}>
        <LateralNavbar />
        <Box
          marginLeft={upLg ? "78px" : "0px"}
          width={upLg ? "calc(100vw - 78px)" : "100vw"}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
