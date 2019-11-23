import store from "@/store";
import EntryService from "@/api/EntryService";
import { Container } from "typedi";

let hostsApi = Container.get(EntryService);

// get controller

import {
  Module,
  VuexModule,
  MutationAction,
  getModule
} from "vuex-module-decorators";
import { IEntryResponse } from "../models/IEntry";

@Module({ dynamic: true, namespaced: true, name: "ArchivesStore", store })
class ArchiveModule extends VuexModule {
  //// -------------------------------------------------------// -------------------------------------------------------
  archives: IEntryResponse[] = [];
  total: number = 0;
  message = "test";

  get getArchived() {
    return this.archives;
  }

  @MutationAction({ mutate: ["archives", "total"] })
  public async macLoadArchived() {
    try {
      let { total, entries: hosts } = await hostsApi.getArchived();

      return { total, archives: hosts };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["message"] })
  public async macRestoreEntries(data: { ids: string[] }) {
    try {
      await hostsApi.patchRestoreEntries(data.ids);

      return { message: "restored successfully" };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["message"] })
  public async macDeleteEntries(data: { ids: string[] }) {
    try {
      await hostsApi.deleteEntries(data.ids);
      return { message: "Deleted selected entries" };
    } catch (err) {
      throw err;
    }
  }
}

export default getModule(ArchiveModule);
