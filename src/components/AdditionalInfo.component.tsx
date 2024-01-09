"use client";
import { Box } from "@mui/material";
import AstronomyBlock from "./AdditionalBlocks/AstronomyBlock.component";
import PrecipitationBlock from "./AdditionalBlocks/PrecipitationBlock.component";
import WindsBlock from "./AdditionalBlocks/WindsBlock.component";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import { weatherService } from "../services/weather.service";

type Props = {};

const AdditionalInfo = () => {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse | null>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    const weatherPromise = weatherService.getCurrentViaIp();
    weatherPromise.then((res) =>
      setCurrentWeather(res as CurrentWeatherResponse)
    );
    setTimeout(() => setIsAnimationStarted(true), 1000);
  }, []);

  return (
    <Box display={"flex"} flexDirection={"row"}>
      {currentWeather && (
        <>
          <WindsBlock currentWeather={currentWeather} />
          <AstronomyBlock />
          <PrecipitationBlock
            isAnimationStarted={isAnimationStarted}
            precipitation={currentWeather.current.precip_mm}
          />
        </>
      )}
    </Box>
  );
};

export default AdditionalInfo;
