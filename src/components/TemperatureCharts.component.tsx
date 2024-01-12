"use client";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import { weatherService } from "../services/weather.service";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { ForecastResponse, HourElement } from "../types/ForecastResponse";

type Props = {
  hours: Array<HourElement>;
};

const TemperatureCharts = ({ hours }: Props) => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    const weatherPromise = weatherService.getForecastViaIp();
    weatherPromise.then((res) => setForecast(res as ForecastResponse));
  }, []);

  return (
    <Box>
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
            data: new Array(24).fill(0).map((val, i, arr) => i),
          },
        ]}
        title="Forecast for today"
        colors={["white"]}
        width={800}
        height={300}
      />
    </Box>
  );
};

export default TemperatureCharts;
