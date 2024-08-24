"use client";

import AdditionalInfo from "@/src/components/AdditionalInfo.component";
import CurrentWeather from "@/src/components/CurrentWeather.component";
import TemperatureCharts from "@/src/components/TemperatureCharts.component";
import { weatherService } from "@/src/services/weather.service";
import { ForecastResponse } from "@/src/types/ForecastResponse";
import { getMainBackground } from "@/src/utils/backgroundUri";
import { getTheme } from "@/src/utils/materialTheme";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const forecastPromise = weatherService.getForecastViaIp();
    forecastPromise.then((res) => {
      setForecast(res as ForecastResponse);
    });
    setTimeout(() => {
      setDate(new Date());
    }, 60000 - date.getSeconds() * 1000);
  }, [date]);

  const theme = getTheme(
    forecast ? !Boolean(forecast.current.is_day) : false,
    forecast ? forecast.current.temp_c : 0,
  );

  return (
    <main>
      <Box
        sx={{
          position: "relative",
          "::before": {
            content: '""',
            position: "fixed",
            left: 0,
            right: 0,
            zIndex: -1,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35) 70%, rgba(255,255,255,0.1)),
            url(${getMainBackground(
              Boolean(forecast?.current.is_day),
              forecast ? forecast.current.temp_c : 0,
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "bottom",
            height: "100vh",
            filter: "blur(15px)",
          },
        }}
      ></Box>
      <Container sx={{ paddingTop: "5rem" }} maxWidth={"md"}>
        <Box p={5}>
          {forecast && (
            <>
              <CurrentWeather date={date} forecast={forecast} />
              <AdditionalInfo currentWeather={forecast.current} />
            </>
          )}
          {forecast && forecast.forecast.forecastday[0] && (
            <TemperatureCharts hours={forecast.forecast.forecastday[0].hour} />
          )}
        </Box>
      </Container>
    </main>
  );
};

export default HomePage;
