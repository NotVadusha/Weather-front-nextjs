import { ThemeOptions, createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const getTheme = (preferDark: boolean) => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: preferDark ? "dark" : "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: `${poppinsFont.style.fontFamily} sans-serif`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 700,
      fontWeightBold: 800,
      htmlFontSize: 18,
    },
  };

  return createTheme(themeOptions);
};
