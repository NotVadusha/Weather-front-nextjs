"use client";
import { useEffect, useState } from "react";
import { weatherService } from "../services/weather.service";
import { Box, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { ForecastResponse, HourElement } from "../types/ForecastResponse";

type Props = {
  hours: Array<HourElement>;
};

const TemperatureCharts = ({ hours }: Props) => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    const weatherPromise = weatherService.getForecastViaIp();
    weatherPromise.then((res) => setForecast(res as ForecastResponse));
  }, []);

  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right top, ${theme.palette.primary.light}, rgba(255,255,255,0.5))`,
      }}
      borderRadius={"10px"}
      border={2}
      borderColor={theme.palette.primary.main}
    >
      <LineChart
        series={[
          {
            curve: "natural",
            data: hours.map((val) => val.temp_c),
            area: false,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: new Array(24).fill(0).map((val, i, arr) => `${i + 1}h`),
          },
        ]}
        title="Forecast for today"
        colors={[`${theme.palette.primary.main}`]}
        width={800}
        height={300}
      />
    </Box>
  );
};

export default TemperatureCharts;
