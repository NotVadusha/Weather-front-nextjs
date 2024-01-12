"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import { weatherService } from "../services/weather.service";
import { ForecastResponse } from "../types/ForecastResponse";
import { Current } from "../types/PartTypes";

interface CurrentWeatherProps {
  currentWeather: Current;
}

export default function CurrentWeather({
  currentWeather,
}: CurrentWeatherProps) {
  return (
    <Box
      p={1}
      bgcolor={"white"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      {currentWeather && (
        <Box color="initial">
          <Box>
            <Typography variant="h6">Current weather</Typography>
            <Typography variant="body1">
              {new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Typography>
          </Box>

          <Box width={"fit-content"} mx={"auto"}>
            <Image
              src={"https:" + currentWeather.condition.icon}
              width={100}
              height={100}
              alt="1"
            />
            <Box display={"inline-block"}>
              <Typography variant="h2">{currentWeather.temp_c}°C</Typography>
              <Typography variant="body1">
                RealFeel {currentWeather.feelslike_c}°C
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body1" width={"fit-content"}>
              {currentWeather.condition.text}
            </Typography>
            <a href="">
              <Typography variant="body1" width={"fit-content"}>
                MORE DETAILS
              </Typography>
            </a>
          </Box>
        </Box>
      )}
    </Box>
  );
}
