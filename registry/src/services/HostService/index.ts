import { Service, Container, Inject } from "typedi";
import { Logger } from "winston";

import HostModel from "../../models/Host";
import { IHostInput, IHostUpdate, IHostResponse } from "../../interface/IHost";

@Service()
export default class HostService {
  logger: Logger;

  constructor() {
    this.logger = Container.get("logger");
  }

  async addHost(host: IHostInput) {
    try {
      const temp = new HostModel(host);
      let result = await temp.save();
      return result;
    } catch (err) {
      throw err;
    }
  }

  async updateHost(id: string, host: IHostUpdate) {
    try {
      let result = await HostModel.findByIdAndUpdate(id, host);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getAllHosts(): Promise<IHostResponse[]> {
    try {
      let hosts = await HostModel.find().sort({
        createdAt: -1
      });
      return hosts;
    } catch (err) {
      throw err;
    }
  }

  async deleteHosts(ids: string[]) {
    try {
      let result = await HostModel.deleteMany({ _id: { $in: ids } });
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getHostData(conditions: {
    email?: string;
    _id?: string;
  }): Promise<IHostResponse> {
    try {
      let user = await HostModel.findOne(conditions);
      if (user) {
        return user;
      } else {
        throw new Error("User not present");
      }
    } catch (err) {
      throw err;
    }
  }
}
