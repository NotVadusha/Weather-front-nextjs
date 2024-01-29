"use client";
import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import { format } from "date-fns";
import { ForecastDay } from "../types/ForecastResponse";
import { getMainBackground } from "../utils/backgroundUri";
import { Current, Location } from "../types/PartTypes";

interface CurrentWeatherProps {
  forecastDay: ForecastDay;
  location: Location;
}

export default function WeatherCard({
  forecastDay,
  location,
}: CurrentWeatherProps) {
  const theme = useTheme();

  const mainColor = alpha(theme.palette.primary.main, 0.7);

  return (
    <Box
      borderRadius={"15px"}
      p={2}
      sx={{
        backgroundImage: `url(${getMainBackground(
          theme.palette.mode === "light" ? true : false,
          forecastDay.day.maxtemp_c || 0
        )})`,
        backgroundPositionY: "center",
      }}
      boxShadow={20}
      borderColor={theme.palette.secondary.contrastText}
    >
      <Box
        lineHeight={1.5}
        px={2}
        pt={4}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        bgcolor={alpha(theme.palette.background.default, 0.6)}
        color={theme.palette.text.primary}
        boxShadow={20}
        borderColor={theme.palette.secondary.contrastText}
        border={1}
        sx={{
          backgroundImage: `linear-gradient(to right top, ${mainColor} , ${alpha(
            mainColor,
            0.2
          )}, ${mainColor})`,
        }}
      >
        <Box width={"fit-content"}>
          <Typography
            variant="h2"
            fontWeight={theme.typography.fontWeightMedium}
          >
            {forecastDay.day.maxtemp_c}°
          </Typography>
          <Typography variant="body1" color={theme.palette.text.secondary}>
            Feels like {forecastDay.day.mintemp_c}°
          </Typography>
          <Typography variant="body1" component={"p"}>
            {location.name + ", " + location.region + ", " + location.country}
          </Typography>
        </Box>
        <Box
          textAlign={"right"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          <Image
            src={"https:" + forecastDay.day.condition.icon}
            width={75}
            height={75}
            alt="Current sky state"
          />
          <Typography variant="body1">{forecastDay.date}</Typography>
          <Typography variant="body1">
            {forecastDay.day.condition.text +
              ", " +
              format(forecastDay.date, "eeee")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
