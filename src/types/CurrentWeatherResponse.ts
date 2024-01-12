import { Current, Location } from "./PartTypes";

export interface CurrentWeatherResponse {
  location: Location;
  current: Current;
}
