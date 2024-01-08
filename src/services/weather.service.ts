import { AxiosError, AxiosResponse } from "axios";
import HttpService from "./http.service";

class WeatherService {
  api: HttpService;
  authKey = process.env.NEXT_PUBLIC_API_KEY;

  constructor() {
    this.api = new HttpService("https://api.weatherapi.com/v1", this.authKey);
  }

  getCurrentViaLocation = async (location: string) => {
    return await this.api.get(`/current.json`, { q: location });
  };

  getCurrentViaIp = async () => {
    const ip = await this.api.getIp();
    return await this.api.get(`/current.json`, { q: ip });
  };
}

export const weatherService = new WeatherService();
