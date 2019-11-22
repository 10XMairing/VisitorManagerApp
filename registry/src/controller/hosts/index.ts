import { Service, Inject } from "typedi";

import HostService from "../../services/HostService";

import { Request, Response, NextFunction } from "express";
import { IHostResponse } from "../../interface/IHost";

@Service()
export default class HostController {
  @Inject()
  private HostServiceInstance: HostService;

  async getAllHosts(req: Request, res: Response, next: NextFunction) {
    try {
      let hosts = await this.HostServiceInstance.getAllHosts();
      return res.status(200).json({
        hosts,
        total: hosts.length
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async deleteHosts(req: Request, res: Response, next: NextFunction) {
    try {
      const ids = req.body.ids;
      let result = await this.HostServiceInstance.deleteHosts(ids);

      return res.status(200).json({
        message: "Hosts deleted successfully",
        result
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async postAddHost(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phone } = req.body;
      let result = await this.HostServiceInstance.addHost({
        name,
        email,
        phone
      });

      return res.status(200).json({
        message: "Hosts Added successfully",
        result
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }
}
