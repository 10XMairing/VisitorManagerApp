import { Service, Container, Inject } from "typedi";
import { Logger } from "winston";
import {
  IEntryInput,
  IEntryUpdate,
  IEntryResponse,
  IEntryCondition
} from "../../interface/IEntry";
import EntryModel from "../../models/Entry";

@Service()
export default class EntryService {
  logger: Logger;

  constructor() {
    this.logger = Container.get("logger");
  }

  async addEntry(entry: IEntryInput) {
    try {
      const temp = new EntryModel(entry);
      let result = await temp.save();
      return result;
    } catch (err) {
      throw err;
    }
  }

  async updateEntry(id: string, entry: IEntryUpdate) {
    try {
      let result = await EntryModel.findByIdAndUpdate(id, entry);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getAllEntries(condition?: IEntryCondition): Promise<IEntryResponse[]> {
    try {
      let entries = await EntryModel.find(condition).sort({ checkin: -1 });
      return entries;
    } catch (err) {
      throw err;
    }
  }

  async toggleArchiveEntries(ids: string[], status: boolean) {
    try {
      let result = await EntryModel.updateMany(
        { _id: { $in: ids } },
        { archive: status }
      );

      return result;
    } catch (err) {
      throw err;
    }
  }

  async deleteEntries(ids: string[]) {
    try {
      let result = await EntryModel.deleteMany({ _id: { $in: ids } });
      return result;
    } catch (err) {
      throw err;
    }
  }
}
