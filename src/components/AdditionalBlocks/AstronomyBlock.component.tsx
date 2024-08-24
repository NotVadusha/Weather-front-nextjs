"use client";

import { weatherService } from "@/src/services/weather.service";
import { AstronomyResponse } from "@/src/types/AstronomyResponse";
import BedtimeOffOutlinedIcon from "@mui/icons-material/BedtimeOffOutlined";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { alpha, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";

export default function AstronomyBlock() {
  const [astronomy, setAstronomy] = useState<AstronomyResponse | null>(null);

  useEffect(() => {
    const astronomyPromise = weatherService.getAstronomyViaIp();
    astronomyPromise.then((res) => setAstronomy(res as AstronomyResponse));
  }, []);

  const theme = useTheme();
  const mainColor = alpha(theme.palette.primary.main, 0.6);

  return (
    <>
      {astronomy ? (
        <Grid
          container
          spacing={2}
          p={1}
          bgcolor={alpha(theme.palette.background.default, 0.6)}
          borderRadius={"10px"}
          border={2}
          borderColor={theme.palette.primary.main}
          sx={{
            backgroundImage: `linear-gradient(to right top, ${theme.palette.primary.light}, rgba(255,255,255,0))`,
          }}
        >
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <Brightness5OutlinedIcon />
            <Typography variant="body1" mx={1}>
              {astronomy.astronomy.astro.sunrise}
            </Typography>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <Brightness1OutlinedIcon />
            <Typography variant="body1" mx={1}>
              {astronomy.astronomy.astro.sunset}
            </Typography>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <DarkModeOutlinedIcon />
            <Typography variant="body1" mx={1}>
              {astronomy.astronomy.astro.moonrise}
            </Typography>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <BedtimeOffOutlinedIcon />
            <Typography variant="body1" mx={1}>
              {astronomy.astronomy.astro.moonset}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
