"use client";

import { Current } from "@/src/types/PartTypes";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import { alpha, Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {
  currentWeather: Current;
};

export default function WindsBlock({ currentWeather }: Props) {
  const theme = useTheme();

  return (
    <>
      {currentWeather ? (
        <Grid
          container
          spacing={2}
          p={1}
          bgcolor={alpha(theme.palette.background.default, 0.6)}
          borderRadius={"10px"}
          border={2}
          borderColor={theme.palette.primary.main}
          sx={{
            backgroundImage: `linear-gradient(to left top, ${theme.palette.primary.light}, rgba(255,255,255,0))`,
          }}
        >
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <ExploreOutlinedIcon />
            <Typography variant="body1" mx={1}>
              {currentWeather.wind_dir}
            </Typography>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <AirOutlinedIcon />
            <Typography variant="body1" mx={1}>
              {currentWeather.wind_kph} km/h
            </Typography>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <CompressOutlinedIcon sx={{ alignSelf: "center" }} />
            <Box>
              <Typography variant="body1" mx={1}>
                {currentWeather.pressure_mb} mb
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={6}
            display={"flex"}
            justifyContent="center"
            alignContent="center"
          >
            <WaterDropOutlinedIcon />
            <Typography variant="body1" mx={1}>
              {currentWeather.humidity} %
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Typography>No info</Typography>
      )}
    </>
  );
}
