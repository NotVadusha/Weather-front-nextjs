"use client";
import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import { format } from "date-fns";
import { ForecastResponse } from "../types/ForecastResponse";
import { getMainBackground } from "../utils/backgroundUri";

interface CurrentWeatherProps {
  forecast: ForecastResponse;
  date: Date;
}

export default function CurrentWeather({
  forecast,
  date,
}: CurrentWeatherProps) {
  const theme = useTheme();

  const mainColor = alpha(theme.palette.primary.main, 0.7);

  return (
    <Box
      borderRadius={"15px"}
      p={2}
      sx={{
        backgroundImage: `url(${getMainBackground(
          Boolean(forecast?.current.is_day),
          forecast ? forecast.current.temp_c : 0
        )})`,
        backgroundPositionY: "center",
      }}
      boxShadow={20}
      borderColor={theme.palette.secondary.contrastText}
    >
      {forecast && (
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
              {forecast.current.temp_c}°
            </Typography>
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Feels like {forecast.current.feelslike_c}°
            </Typography>
            <Typography variant="body1" component={"p"}>
              {forecast.location.name +
                ", " +
                forecast.location.region +
                ", " +
                forecast.location.country}
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
              src={"https:" + forecast.current.condition.icon}
              width={75}
              height={75}
              alt="Current sky state"
            />
            <Typography variant="body1">
              {date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Typography>
            <Typography variant="body1">
              {forecast.current.condition.text + ", " + format(date, "eeee")}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
