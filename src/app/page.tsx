import { Box } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather.component";
import AdditionalInfo from "../components/AdditionalInfo.component";
import TemperatureCharts from "../components/TemperatureCharts.component";

const HomePage = () => {
  const hours = [
    {
      time_epoch: 1705010400,
      time: "2024-01-12 00:00",
      temp_c: 0.6,
      temp_f: 33,
      is_day: 0,
    },
    {
      time_epoch: 1705014000,
      time: "2024-01-12 01:00",
      temp_c: 0.3,
      temp_f: 32.5,
      is_day: 0,
    },
    {
      time_epoch: 1705017600,
      time: "2024-01-12 02:00",
      temp_c: 0.1,
      temp_f: 32.2,
      is_day: 0,
    },
    {
      time_epoch: 1705021200,
      time: "2024-01-12 03:00",
      temp_c: -0.1,
      temp_f: 31.8,
      is_day: 0,
    },
    {
      time_epoch: 1705024800,
      time: "2024-01-12 04:00",
      temp_c: -0.4,
      temp_f: 31.2,
      is_day: 0,
    },
    {
      time_epoch: 1705028400,
      time: "2024-01-12 05:00",
      temp_c: -1,
      temp_f: 30.3,
      is_day: 0,
    },
    {
      time_epoch: 1705032000,
      time: "2024-01-12 06:00",
      temp_c: -1.4,
      temp_f: 29.5,
      is_day: 0,
    },
    {
      time_epoch: 1705035600,
      time: "2024-01-12 07:00",
      temp_c: -1.5,
      temp_f: 29.3,
      is_day: 0,
    },
    {
      time_epoch: 1705039200,
      time: "2024-01-12 08:00",
      temp_c: -3,
      temp_f: 26.6,
      is_day: 1,
    },
    {
      time_epoch: 1705042800,
      time: "2024-01-12 09:00",
      temp_c: -3.8,
      temp_f: 25.2,
      is_day: 1,
    },
    {
      time_epoch: 1705046400,
      time: "2024-01-12 10:00",
      temp_c: -4.5,
      temp_f: 23.9,
      is_day: 1,
    },
    {
      time_epoch: 1705050000,
      time: "2024-01-12 11:00",
      temp_c: -4.8,
      temp_f: 23.4,
      is_day: 1,
    },
    {
      time_epoch: 1705053600,
      time: "2024-01-12 12:00",
      temp_c: -4.7,
      temp_f: 23.6,
      is_day: 1,
    },
    {
      time_epoch: 1705057200,
      time: "2024-01-12 13:00",
      temp_c: -4.5,
      temp_f: 23.9,
      is_day: 1,
    },
    {
      time_epoch: 1705060800,
      time: "2024-01-12 14:00",
      temp_c: -4.3,
      temp_f: 24.2,
      is_day: 1,
    },
    {
      time_epoch: 1705064400,
      time: "2024-01-12 15:00",
      temp_c: -4.3,
      temp_f: 24.2,
      is_day: 1,
    },
    {
      time_epoch: 1705068000,
      time: "2024-01-12 16:00",
      temp_c: -4.7,
      temp_f: 23.5,
      is_day: 1,
    },
    {
      time_epoch: 1705071600,
      time: "2024-01-12 17:00",
      temp_c: -5.3,
      temp_f: 22.5,
      is_day: 0,
    },
    {
      time_epoch: 1705075200,
      time: "2024-01-12 18:00",
      temp_c: -5.5,
      temp_f: 22.1,
      is_day: 0,
    },
    {
      time_epoch: 1705078800,
      time: "2024-01-12 19:00",
      temp_c: -5.7,
      temp_f: 21.7,
      is_day: 0,
    },
    {
      time_epoch: 1705082400,
      time: "2024-01-12 20:00",
      temp_c: -6,
      temp_f: 21.3,
      is_day: 0,
    },
    {
      time_epoch: 1705086000,
      time: "2024-01-12 21:00",
      temp_c: -6.1,
      temp_f: 21.1,
      is_day: 0,
    },
    {
      time_epoch: 1705089600,
      time: "2024-01-12 22:00",
      temp_c: -6.2,
      temp_f: 20.8,
      is_day: 0,
    },
    {
      time_epoch: 1705093200,
      time: "2024-01-12 23:00",
      temp_c: -6.3,
      temp_f: 20.6,
      is_day: 0,
    },
  ];
  return (
    <main>
      <Box>
        <CurrentWeather />
        <AdditionalInfo />
        <TemperatureCharts hours={hours} />
      </Box>
    </main>
  );
};

export default HomePage;
