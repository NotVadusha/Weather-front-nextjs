import { ThemeOptions, createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "rgba(157,232,245,0.76)",
      light: "rgba(248,250,251,0.91)",
      dark: "#5cdcf1",
      contrastText: "#3f51b5",
    },
    secondary: {
      main: "#ec5555",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: `${poppinsFont.style.fontFamily} sans-serif`,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    htmlFontSize: 18,
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(157,232,245,0.76)",
      light: "rgba(248,250,251,0.91)",
      dark: "#5cdcf1",
      contrastText: "#3f51b5",
    },
    secondary: {
      main: "#ec5555",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: `${poppinsFont.style.fontFamily} sans-serif`,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    htmlFontSize: 18,
  },
};

export const getTheme = (preferDark: boolean) =>
  createTheme(preferDark ? darkTheme : lightTheme);
