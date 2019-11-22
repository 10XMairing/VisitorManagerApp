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
const Host_1 = require("../../models/Host");
let HostService = class HostService {
    constructor() {
        this.logger = typedi_1.Container.get("logger");
    }
    async addHost(host) {
        try {
            const temp = new Host_1.default(host);
            let result = await temp.save();
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async updateHost(id, host) {
        try {
            let result = await Host_1.default.findByIdAndUpdate(id, host);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async getAllHosts() {
        try {
            let hosts = await Host_1.default.find().sort({
                createdAt: -1
            });
            return hosts;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteHosts(ids) {
        try {
            let result = await Host_1.default.deleteMany({ _id: { $in: ids } });
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async getHostData(conditions) {
        try {
            let user = await Host_1.default.findOne(conditions);
            if (user) {
                return user;
            }
            else {
                throw new Error("User not present");
            }
        }
        catch (err) {
            throw err;
        }
    }
};
HostService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], HostService);
exports.default = HostService;
//# sourceMappingURL=index.js.map