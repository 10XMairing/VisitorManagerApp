import { Service, Inject } from "typedi";

import EntryService from "../../services/EntryService";
import HostService from "../../services/HostService";

import eventDispatcher from "event-dispatch";

import { Request, Response, NextFunction } from "express";
import { IHostResponse } from "../../interface/IHost";

@Service()
export default class EntryController {
  @Inject()
  private EntryServiceIns: EntryService;

  @Inject()
  private HostServiceInstance: HostService;

  async postAddEntry(req: Request, res: Response, next: NextFunction) {
    try {
      // prepare data
      const { name, email, phone, address, host } = req.body;

      // check if host with given main exists

      let userData: IHostResponse;

      try {
        // present
        let user = await this.HostServiceInstance.getHostData({
          email: host.email
        });
        userData = user;
      } catch (err) {
        // not present
        // create new user
        const { name, email, phone } = host;
        let user = await this.HostServiceInstance.addHost({
          name,
          email,
          phone
        });
        userData = user.id;
      }

      // get current date
      const checkin = new Date();

      let result = await this.EntryServiceIns.addEntry({
        name,
        email,
        phone,
        checkin,
        address,
        host: userData._id
      });

      // dispatch event to start email and sms services
      eventDispatcher.dispatch("checkin", {
        name,
        email,
        phone,
        checkin: result.checkin.toLocaleString(),
        address,
        host: {
          email: userData.email,
          name: userData.name
        }
      });

      return res.status(200).json({
        message: "Entry added",
        result
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async patchUpdateCheckout(req: Request, res: Response, next: NextFunction) {
    try {
      // test
      const id = req.params.id;
      let checkout = new Date();
      let result = await this.EntryServiceIns.updateEntry(id, { checkout });

      let userData = await this.HostServiceInstance.getHostData({
        _id: result.host
      });

      try {
        eventDispatcher.dispatch("checkout", {
          name: result.name,
          email: result.email,
          phone: result.phone,
          address: result.address,
          checkin: result.checkin.toLocaleString(),
          checkout: new Date().toLocaleString(),
          host: {
            email: userData.email,
            name: userData.name
          }
        });
      } catch (err) {
        console.log(err);
      }

      return res.status(200).json({
        message: "Visitor Checked Out!",
        result
      });
    } catch (err) {
      err["status"] = 400;
      next(err);
    }
  }

  async getAllEntries(req: Request, res: Response, next: NextFunction) {
    try {
      let entries = await this.EntryServiceIns.getAllEntries({
        archive: false
      });
      return res.status(200).json({
        total: entries.length,
        entries
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async getArchivedEntries(req: Request, res: Response, next: NextFunction) {
    try {
      let entries = await this.EntryServiceIns.getAllEntries({ archive: true });
      return res.status(200).json({
        total: entries.length,
        entries
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async patchArchiveEntries(req: Request, res: Response, next: NextFunction) {
    try {
      const ids = req.body.ids;
      const restore =
        ((req.params.restore || "") as String).toLowerCase() == "true"
          ? true
          : false;

      const result = await this.EntryServiceIns.toggleArchiveEntries(
        ids,
        !restore
      );

      return res.status(200).json({
        message: restore ? "Restored entries" : "Archived entries",
        result
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }

  async deleteEntries(req: Request, res: Response, next: NextFunction) {
    try {
      const ids = req.body.ids;
      const result = this.EntryServiceIns.deleteEntries(ids);

      return res.status(200).json({
        message: "deleted data successfully",
        ids,
        result
      });
    } catch (err) {
      req["status"] = 400;
      next(err);
    }
  }
}
