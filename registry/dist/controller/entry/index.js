"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const EntryService_1 = require("../../services/EntryService");
const HostService_1 = require("../../services/HostService");
const event_dispatch_1 = require("event-dispatch");
let EntryController = class EntryController {
    async postAddEntry(req, res, next) {
        try {
            // prepare data
            const { name, email, phone, address, host } = req.body;
            // check if host with given main exists
            let userData;
            try {
                // present
                let user = await this.HostServiceInstance.getHostData({
                    email: host.email
                });
                userData = user;
            }
            catch (err) {
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
            event_dispatch_1.default.dispatch("checkin", {
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
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async patchUpdateCheckout(req, res, next) {
        try {
            // test
            const id = req.params.id;
            let checkout = new Date();
            let result = await this.EntryServiceIns.updateEntry(id, { checkout });
            let userData = await this.HostServiceInstance.getHostData({
                _id: result.host
            });
            try {
                event_dispatch_1.default.dispatch("checkout", {
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
            }
            catch (err) {
                console.log(err);
            }
            return res.status(200).json({
                message: "Visitor Checked Out!",
                result
            });
        }
        catch (err) {
            err["status"] = 400;
            next(err);
        }
    }
    async getAllEntries(req, res, next) {
        try {
            let entries = await this.EntryServiceIns.getAllEntries({
                archive: false
            });
            return res.status(200).json({
                total: entries.length,
                entries
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async getArchivedEntries(req, res, next) {
        try {
            let entries = await this.EntryServiceIns.getAllEntries({ archive: true });
            return res.status(200).json({
                total: entries.length,
                entries
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async patchArchiveEntries(req, res, next) {
        try {
            const ids = req.body.ids;
            const restore = (req.params.restore || "").toLowerCase() == "true"
                ? true
                : false;
            const result = await this.EntryServiceIns.toggleArchiveEntries(ids, !restore);
            return res.status(200).json({
                message: restore ? "Restored entries" : "Archived entries",
                result
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async deleteEntries(req, res, next) {
        try {
            const ids = req.body.ids;
            const result = this.EntryServiceIns.deleteEntries(ids);
            return res.status(200).json({
                message: "deleted data successfully",
                ids,
                result
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", EntryService_1.default)
], EntryController.prototype, "EntryServiceIns", void 0);
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", HostService_1.default)
], EntryController.prototype, "HostServiceInstance", void 0);
EntryController = __decorate([
    typedi_1.Service()
], EntryController);
exports.default = EntryController;
//# sourceMappingURL=index.js.map