import { Service, Container } from "typedi";
import ApiModule from "./ApiModule";
import { IHostResponse } from "@/store/models/IEntry";

@Service()
export default class HostService {
  ApiService: ApiModule;

  constructor() {
    this.ApiService = Container.get(ApiModule);
  }

  async getAllHosts(): Promise<{ total: number; hosts: IHostResponse[] }> {
    try {
      let response = await this.ApiService.client().get("/api/v1/hosts");
      if (response.status < 300) {
        // success
        return response.data;
      } else {
        throw new Error("failed to fetch hosts data");
      }
    } catch (err) {
      throw new Error("failed to fetch hosts data");
    }
  }

  async deleteHosts(ids: string[]): Promise<Boolean> {
    try {
      let response = await this.ApiService.client().delete("/api/v1/hosts", {
        data: { ids }
      });
      if (response.status < 300) {
        // success
        return true;
      } else {
        throw new Error("failed to delete hosts data");
      }
    } catch (err) {
      throw new Error("failed to delete hosts data");
    }
  }

  async addHost(host: {
    name: string;
    email: string;
    phone: string;
  }): Promise<{ message: string; result: IHostResponse }> {
    try {
      let response = await this.ApiService.client().post("/api/v1/hosts", host);
      if (response.status < 300) {
        // success
        return response.data;
      } else {
        throw new Error("failed to add hosts data");
      }
    } catch (err) {
      throw new Error("failed to add hosts data");
    }
  }
}
