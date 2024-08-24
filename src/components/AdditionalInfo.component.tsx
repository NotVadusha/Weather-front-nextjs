"use client";

import { Current } from "@/src/types/PartTypes";
import { Stack, useTheme } from "@mui/material";
import AstronomyBlock from "./AdditionalBlocks/AstronomyBlock.component";
import PrecipitationBlock from "./AdditionalBlocks/PrecipitationBlock.component";
import WindsBlock from "./AdditionalBlocks/WindsBlock.component";

type AdditionalInfoProps = {
  currentWeather: Current;
};

const AdditionalInfo = ({ currentWeather }: AdditionalInfoProps) => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      spacing={2}
      py={5}
      color={theme.palette.text.primary}
    >
      {currentWeather && (
        <>
          <WindsBlock currentWeather={currentWeather} />
          <AstronomyBlock />
          <PrecipitationBlock precipitation={currentWeather.precip_mm} />
        </>
      )}
    </Stack>
  );
};

export default AdditionalInfo;
