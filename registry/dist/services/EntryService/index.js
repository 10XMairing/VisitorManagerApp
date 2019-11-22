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
const Entry_1 = require("../../models/Entry");
let EntryService = class EntryService {
    constructor() {
        this.logger = typedi_1.Container.get("logger");
    }
    async addEntry(entry) {
        try {
            const temp = new Entry_1.default(entry);
            let result = await temp.save();
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async updateEntry(id, entry) {
        try {
            let result = await Entry_1.default.findByIdAndUpdate(id, entry);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async getAllEntries(condition) {
        try {
            let entries = await Entry_1.default.find(condition).sort({ checkin: -1 });
            return entries;
        }
        catch (err) {
            throw err;
        }
    }
    async toggleArchiveEntries(ids, status) {
        try {
            let result = await Entry_1.default.updateMany({ _id: { $in: ids } }, { archive: status });
            return result;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteEntries(ids) {
        try {
            let result = await Entry_1.default.deleteMany({ _id: { $in: ids } });
            return result;
        }
        catch (err) {
            throw err;
        }
    }
};
EntryService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], EntryService);
exports.default = EntryService;
//# sourceMappingURL=index.js.map