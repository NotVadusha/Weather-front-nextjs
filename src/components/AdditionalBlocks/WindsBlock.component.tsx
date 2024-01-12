"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Current } from "@/src/types/PartTypes";

type Props = {
  currentWeather: Current;
};

export default function WindsBlock({ currentWeather }: Props) {
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
              {currentWeather.wind_dir} {currentWeather.wind_kph} km/h
            </Typography>
            <Typography>{currentWeather.gust_kph} km/h</Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>{currentWeather.pressure_mb} </Typography>
            <Typography>{currentWeather.humidity} </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
