"use client";
import { Box } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather.component";
import AdditionalInfo from "../components/AdditionalInfo.component";
import TemperatureCharts from "../components/TemperatureCharts.component";
import { useEffect, useState } from "react";
import { weatherService } from "../services/weather.service";
import { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import { ForecastResponse } from "../types/ForecastResponse";

const HomePage = () => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    const forecastPromise = weatherService.getForecastViaIp();
    forecastPromise.then((res) => setForecast(res as ForecastResponse));
  }, []);

  console.log(forecast);

  return (
    <main>
      <Box>
        {forecast && (
          <>
            <CurrentWeather currentWeather={forecast.current} />
            <AdditionalInfo currentWeather={forecast.current} />
          </>
        )}
        {forecast && forecast.forecast.forecastday[0] && (
          <TemperatureCharts hours={forecast.forecast.forecastday[0].hour} />
        )}
      </Box>
    </main>
  );
};

export default HomePage;
