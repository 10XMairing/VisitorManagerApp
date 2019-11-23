import { Service, Container, Inject } from "typedi";
import ApiModule from "./ApiModule";
import { IEntryResponse, IEntryInput } from "@/store/models/IEntry";

@Service()
export default class EntryService {
  ApiService: ApiModule;

  constructor() {
    this.ApiService = Container.get(ApiModule);
  }

  async getAllEntries(): Promise<{ total: number; entries: IEntryResponse[] }> {
    try {
      let response = await this.ApiService.client().get("/api/v1/records");
      if (response.status < 300) {
        // success
        return response.data;
      } else {
        throw new Error("failed to fetch data");
      }
    } catch (err) {
      throw new Error("failed to fetch data");
    }
  }

  async getArchived(): Promise<{ total: number; entries: IEntryResponse[] }> {
    try {
      let response = await this.ApiService.client().get(
        "/api/v1/records/archive"
      );
      if (response.status < 300) {
        // success
        return response.data;
      } else {
        throw new Error("failed to fetch data");
      }
    } catch (err) {
      throw new Error("failed to fetch data");
    }
  }

  async postAddNewEntry(entry: IEntryInput): Promise<Boolean> {
    try {
      const response = await this.ApiService.client().post(
        "/api/v1/records",
        entry
      );
      if (response.status < 300) {
        return true;
      } else {
        throw new Error("Error adding new entries");
      }
    } catch (err) {
      throw new Error("Error adding new entries");
    }
  }

  async patchCheckoutVisitor(entryId: string): Promise<Boolean> {
    try {
      const response = await this.ApiService.client().patch(
        `/api/v1/records/checkout/${entryId}`
      );
      if (response.status < 300) {
        return true;
      } else {
        throw new Error("Error checking out  entries");
      }
    } catch (err) {
      throw new Error("Error checking out  entries");
    }
  }
  async patchArchiveEntries(ids: string[]) {
    try {
      const response = await this.ApiService.client().patch(
        `/api/v1/records/archive`,
        { ids }
      );
      if (response.status < 300) {
        return true;
      } else {
        throw new Error("Error archiving entries");
      }
    } catch (err) {
      throw new Error("Error archiving entries");
    }
  }

  async patchRestoreEntries(ids: string[]) {
    try {
      const response = await this.ApiService.client().patch(
        `/api/v1/records/archive/restore=True`,
        { ids }
      );
      if (response.status < 300) {
        return true;
      } else {
        throw new Error("Error restoring entries");
      }
    } catch (err) {
      throw new Error("Error restoring entries");
    }
  }
  async deleteEntries(ids: string[]) {
    try {
      const response = await this.ApiService.client().delete(
        `/api/v1/records`,
        {
          data: { ids }
        }
      );
      if (response.status < 300) {
        return true;
      } else {
        throw new Error("Error deleting entries");
      }
    } catch (err) {
      throw new Error("Error deleting entries");
    }
  }
}
