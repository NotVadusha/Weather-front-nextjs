"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { weatherService } from "../../services/weather.service";
import { AstronomyResponse } from "../../types/AstronomyResponse";

type Props = {};

export default function AstronomyBlock({}: Props) {
  const [astronomy, setAstronomy] = useState<AstronomyResponse | null>(null);

  useEffect(() => {
    const astronomyPromise = weatherService.getAstronomyViaIp();
    astronomyPromise.then((res) => setAstronomy(res as AstronomyResponse));
  }, []);

  return (
    <>
      {astronomy ? (
        <Box
          p={1}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          bgcolor={"white"}
          color="initial"
        >
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>{astronomy.astronomy.astro.sunrise}</Typography>
            <Typography>{astronomy.astronomy.astro.sunset}</Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>{astronomy.astronomy.astro.moonrise} </Typography>
            <Typography>{astronomy.astronomy.astro.moonset} </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
