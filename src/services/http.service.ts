import axios, { AxiosError, AxiosResponse } from "axios";

export default class HttpService {
  apiUrl: string;
  authKey: string | undefined;

  constructor(url: string, key?: string) {
    this.apiUrl = url;
    this.authKey = key;
  }

  get = async (
    url: string,
    query: object
  ): Promise<AxiosResponse | AxiosError> => {
    try {
      const response = await axios.get(this.apiUrl + url, {
        params: {
          key: this.authKey,
          ...query,
        },
      });
      return response;
    } catch (e) {
      return e as AxiosError;
    }
  };
}
