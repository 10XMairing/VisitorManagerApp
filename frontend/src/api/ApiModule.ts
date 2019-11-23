import axios from "axios";
import { Service } from "typedi";

@Service("api.service")
export default class PopcornApiService {
  public myapi = axios.create({
    baseURL:
      process.env.NODE_ENV == "production"
        ? process.env.VUE_APP_BASE_URL
        : "https://localhost:3000",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

  public setJWT(jwt: string) {
    this.myapi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  }

  public clearJWT() {
    delete this.myapi.defaults.headers.common.Authorization;
  }

  public client() {
    return this.myapi;
  }
}
