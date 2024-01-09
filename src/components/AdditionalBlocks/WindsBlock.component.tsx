"use client";
import { Box, Collapse, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "../../types/CurrentWeatherResponse";
import { weatherService } from "../../services/weather.service";
import { AstronomyResponse } from "../../types/AstronomyResponse";

type Props = {
  currentWeather: CurrentWeatherResponse;
};

export default function WindsBlock({ currentWeather }: Props) {
  const [animationActivate, setAnimationActivate] = useState<boolean>(false);

  return (
    <>
      {currentWeather ? (
        <Box
          p={1}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          bgcolor={"white"}
          color="initial"
        >
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>
              {currentWeather.current.wind_dir}{" "}
              {currentWeather.current.wind_kph} km/h
            </Typography>
            <Typography>{currentWeather.current.gust_kph} km/h</Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>{currentWeather.current.pressure_mb} </Typography>
            <Typography>{currentWeather.current.humidity} </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
