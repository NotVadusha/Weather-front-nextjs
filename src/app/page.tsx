"use client";
import { Box } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather.component";

const HomePage = () => {
  return (
    <main>
      <Box>
        <CurrentWeather />
      </Box>
    </main>
  );
};

export default HomePage;
