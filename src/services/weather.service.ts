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

  getForecastViaIp = async () => {
    const ip = await this.api.getIp();
    return await this.api.get(`/forecast.json`, { q: ip, days: 3 });
  };

  getForecastViaLocation = async (location: string) => {
    const ip = await this.api.getIp();
    return await this.api.get(`/forecast.json`, { q: location });
  };

  getAstronomyViaIp = async () => {
    const ip = await this.api.getIp();
    return await this.api.get(`/astronomy.json`, { q: ip });
  };

  getAstronomyViaLocation = async (location: string) => {
    const ip = await this.api.getIp();
    return await this.api.get(`/astronomy.json`, { q: location });
  };
}

export const weatherService = new WeatherService();
