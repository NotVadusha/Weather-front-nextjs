"use client";

import { ThemeOptions, createTheme } from "@mui/material";
import { Poppins } from "next/font/google";
import { TEMP_BREAKPOINTS } from "./backgroundUri";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const getTheme = (preferDark: boolean, temperature: number) => {
  const mainColor =
    temperature < TEMP_BREAKPOINTS.warm
      ? temperature < TEMP_BREAKPOINTS.normal
        ? "#3f51b5"
        : "#66bb6a"
      : "#FF5733";

  const themeOptions: ThemeOptions = {
    palette: {
      mode: preferDark ? "dark" : "light",
      primary: {
        main: mainColor,
      },
      secondary: {
        main: "#f50057",
        contrastText: "rgba(255, 255, 255, 0.8)",
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: `${poppinsFont.style.fontFamily}, sans-serif`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 700,
      fontWeightBold: 800,
      htmlFontSize: 18,
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "h2",
            subtitle2: "h2",
            body1: "span",
            body2: "span",
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
