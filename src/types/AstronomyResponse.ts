import { Location } from "./PartTypes";

export interface astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
}

export interface AstronomyResponse {
  location: Location;
  astronomy: { astro: astro };
}
