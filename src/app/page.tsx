import { Box } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather.component";
import AdditionalInfo from "../components/AdditionalInfo.component";

const HomePage = () => {
  return (
    <main>
      <Box>
        <CurrentWeather />
        <AdditionalInfo />
      </Box>
    </main>
  );
};

export default HomePage;
