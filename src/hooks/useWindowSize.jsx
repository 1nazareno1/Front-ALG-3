import { useMediaQuery, useTheme } from "@mui/material";

export const useWindowSize = () => {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return {
    downMd,
    upLg,
  };
};
