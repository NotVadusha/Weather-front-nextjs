"use client";
import { Box, Container, Stack } from "@mui/material";
import { ThemeProvider, alpha, createTheme } from "@mui/material/styles";
import { weatherService } from "../../services/weather.service";
import { ForecastResponse } from "../../types/ForecastResponse";
import { getMainBackground } from "../../utils/backgroundUri";
import { getTheme } from "../../utils/materialTheme";
import WeatherCard from "@/src/components/WeatherCard.component";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";

const ForecastPage = () => {
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
    forecast ? forecast.current.temp_c : 0
  );
  return (
    <>
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
              forecast ? forecast.current.temp_c : 0
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
        <ThemeProvider theme={theme}>
          <Box bgcolor={alpha(theme.palette.primary.contrastText, 0.5)} p={4}>
            {forecast && (
              <LineChart
                series={[
                  {
                    curve: "natural",
                    data: forecast?.forecast.forecastday.map(
                      (day) => day.day.avgtemp_c
                    ),
                    area: false,
                  },
                ]}
                xAxis={[
                  {
                    scaleType: "point",
                    data: forecast.forecast.forecastday.map((day) => day.date),
                  },
                ]}
                title="Forecast for today"
                colors={[`${theme.palette.primary.main}`]}
                width={800}
                height={300}
              />
            )}
            <Stack spacing={4}>
              <>
                {forecast?.forecast.forecastday.map((item) => (
                  <WeatherCard
                    forecastDay={item}
                    location={forecast.location}
                  />
                ))}
              </>
            </Stack>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default ForecastPage;
