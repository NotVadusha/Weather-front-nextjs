import { AxiosError, AxiosResponse } from "axios";
import HttpService from "./http.service";

class WeatherService {
  api: HttpService;
  authKey = process.env.NEXT_PUBLIC_API_KEY;

  constructor() {
    this.api = new HttpService("https://api.weatherapi.com/v1", this.authKey);
  }

  getCurrentViaLocation = async (
    location: string
  ): Promise<AxiosResponse | AxiosError> => {
    return await this.api.get(`/current.json`, { q: location });
  };
}

export const weatherService = new WeatherService();
