import store from "@/store";
import EntryService from "@/api/EntryService";
import HostService from "@/api/HostService";
import { Container } from "typedi";

let EntryApi = Container.get(EntryService);
let HostApi = Container.get(HostService);

// get controller

import {
  Module,
  VuexModule,
  MutationAction,
  getModule,
  Action
} from "vuex-module-decorators";
import {
  IEntryResponse,
  IEntryInput,
  IHostResponse,
  IHostInput
} from "../models/IEntry";

@Module({ dynamic: true, namespaced: true, name: "HomeStore", store })
class HomeModule extends VuexModule {
  //// -------------------------------------------------------// -------------------------------------------------------
  entries: IEntryResponse[] = [];
  total: number = 0;
  hosts: IHostResponse[] = [];

  get getHosts() {
    return this.hosts;
  }

  message = "test";

  get getEntries() {
    return this.entries;
  }

  get test() {
    return this.message;
  }

  @MutationAction({ mutate: ["entries", "total"] })
  public async macLoadEntries() {
    try {
      let { total, entries } = await EntryApi.getAllEntries();

      return { total, entries };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["message"], rawError: true })
  public async macAddEntry(entry: IEntryInput) {
    try {
      await EntryApi.postAddNewEntry(entry);
      return { message: "added entry" };
    } catch (err) {
      throw err;
    }
  }
  @MutationAction({ mutate: ["message"], rawError: true })
  public async macCheckout(entryid: string) {
    try {
      await EntryApi.patchCheckoutVisitor(entryid);
      return { message: "checked out entry" };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["message"] })
  public async macArchiveEntries(data: { ids: string[] }) {
    try {
      await EntryApi.patchArchiveEntries(data.ids);
      return { message: "Archived selected entries" };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["message"] })
  public async macDeleteEntries(data: { ids: string[] }) {
    try {
      await EntryApi.deleteEntries(data.ids);
      return { message: "Deleted selected entries" };
    } catch (err) {
      throw err;
    }
  }

  @MutationAction({ mutate: ["hosts"], rawError: true })
  public async macGetAllHosts() {
    try {
      let { total, hosts } = await HostApi.getAllHosts();
      return { hosts };
    } catch (err) {
      throw err;
    }
  }
  @MutationAction({ mutate: ["message"], rawError: true })
  public async macDeleteHosts(data: { ids: string[] }) {
    try {
      await HostApi.deleteHosts(data.ids);
      return { message: "Deleted Hosts successfully" };
    } catch (err) {
      throw err;
    }
  }
  @MutationAction({ mutate: ["message"], rawError: true })
  public async macAddHost(host: IHostInput) {
    try {
      await HostApi.addHost(host);
      return { message: "Host added successfully" };
    } catch (err) {
      throw err;
    }
  }
}

export default getModule(HomeModule);
