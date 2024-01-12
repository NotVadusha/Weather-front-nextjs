"use client";
import { Box } from "@mui/material";
import AstronomyBlock from "./AdditionalBlocks/AstronomyBlock.component";
import PrecipitationBlock from "./AdditionalBlocks/PrecipitationBlock.component";
import WindsBlock from "./AdditionalBlocks/WindsBlock.component";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import { weatherService } from "../services/weather.service";
import { Current } from "../types/PartTypes";

type AdditionalInfoProps = {
  currentWeather: Current;
};

const AdditionalInfo = ({ currentWeather }: AdditionalInfoProps) => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      {currentWeather && (
        <>
          <WindsBlock currentWeather={currentWeather} />
          <AstronomyBlock />
          <PrecipitationBlock precipitation={currentWeather.precip_mm} />
        </>
      )}
    </Box>
  );
};

export default AdditionalInfo;
