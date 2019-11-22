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
const HostService_1 = require("../../services/HostService");
let HostController = class HostController {
    async getAllHosts(req, res, next) {
        try {
            let hosts = await this.HostServiceInstance.getAllHosts();
            return res.status(200).json({
                hosts,
                total: hosts.length
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async deleteHosts(req, res, next) {
        try {
            const ids = req.body.ids;
            let result = await this.HostServiceInstance.deleteHosts(ids);
            return res.status(200).json({
                message: "Hosts deleted successfully",
                result
            });
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
    async postAddHost(req, res, next) {
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
        }
        catch (err) {
            req["status"] = 400;
            next(err);
        }
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", HostService_1.default)
], HostController.prototype, "HostServiceInstance", void 0);
HostController = __decorate([
    typedi_1.Service()
], HostController);
exports.default = HostController;
//# sourceMappingURL=index.js.map