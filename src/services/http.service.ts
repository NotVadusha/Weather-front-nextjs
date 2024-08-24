import axios from "axios";

export default class HttpService {
  apiUrl: string;
  authKey: string | undefined;

  constructor(url: string, key?: string) {
    this.apiUrl = url;
    this.authKey = key;
  }

  get = async (url: string, query: object) => {
    const response = await axios
      .get(this.apiUrl + url, {
        params: { ...query, key: this.authKey },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
    return response;
  };

  getIp = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    return res.data.ip;
  };
}
