import { astro } from "./AstronomyResponse";
import { Current } from "./PartTypes";

export interface ForecastResponse {
  current: Current;
  location: Location;
  forecast: { forecastday: [] };
}

export interface ForecastDay {
  astro: astro;
  date: string;
  date_epoch: number;
  day: DayElement;
  hour: Array<HourElement>;
}

export interface DayElement {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: { text: string; icon: string; code: number };
  uv: number;
  daily_will_it_rain: boolean;
  daily_will_it_snow: boolean;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
}

export interface HourElement {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  condition: { text: string; icon: string; code: number };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: boolean;
  will_it_snow: boolean;
  is_day: boolean;
  vis_km: number;
  vis_miles: number;
  chance_of_rain: number;
  chance_of_snow: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}
