<template>
  <div>
    <v-text-field v-if="!pageLoaded" loading color="success"></v-text-field>
    <div v-else>
      <v-toolbar flat>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn
              :loading="loadingRes"
              :disabled="!anySelected"
              @click="restoreSelected"
              color="primary"
              icon
              v-on="on"
            >
              <v-icon>restore</v-icon>
            </v-btn>
          </template>
          <span>Restore Selected</span>
        </v-tooltip>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn
              :disabled="!anySelected"
              @click="deleteDialog = true"
              color="primary"
              icon
              v-on="on"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </template>
          <span>Delete Selected</span>
        </v-tooltip>

        <v-toolbar-title>Archived Entries</v-toolbar-title>
      </v-toolbar>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                <v-checkbox v-model="checkall" color="primary"></v-checkbox>
              </th>
              <th class="text-left">Name</th>
              <th class="text-left">Phone</th>
              <th class="text-left">Email</th>
              <th class="text-left">Address</th>
              <th class="text-left">Host</th>
              <th class="text-left">Check in</th>
              <th class="text-left">Check out</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, ix) in archived" :key="`asd${ix}`">
              <td>
                <v-checkbox v-model="checks[ix]" color="primary"></v-checkbox>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.host ? item.host.name : "unknown" }}</td>
              <td>{{ getDate(item.checkin) }}</td>
              <td>{{ getDate(item.checkout) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <!-- delete dialog prompt -->
      <v-dialog v-model="deleteDialog" max-width="400px">
        <v-card>
          <v-card-title class="headline">Confirm Delete?</v-card-title>

          <v-card-text
            >This Action cannot be reverted. You may archive the entries
            instead.</v-card-text
          >

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="blue darken-1" text @click="deleteDialog = false"
              >cancel</v-btn
            >

            <v-btn
              color="blue darken-1"
              :loading="loadingDel"
              text
              @click="deleteSelected"
              >DELETE</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ArchiveStore from "../store/modules/ArchiveModule";
import { parseDateString } from "../utils";
@Component({
  components: {}
})
export default class Archive extends Vue {
  pageLoaded = false;

  loadingRes = false;
  loadingDel = false;
  deleteDialog = false;

  checks = [];
  checkall = false;

  get anySelected() {
    for (var i = 0; i < this.checks.length; i++) {
      if (this.checks[i]) {
        return true;
      }
    }
    return false;
  }

  @Watch("checkall")
  onChangeCheckAll(val: boolean, oldVal: boolean) {
    if (val) {
      // is check all
      this.setChecksStatus(this.archived.length, true);
    } else {
      // uncheck all
      this.setChecksStatus(this.archived.length, false);
    }
  }

  async created() {
    await this.loadArchives();
  }

  get archived() {
    return ArchiveStore.getArchived;
  }

  public async loadArchives() {
    this.pageLoaded = false;
    await ArchiveStore.macLoadArchived();
    this.pageLoaded = true;
  }

  public getDate(datestr: string) {
    return parseDateString(datestr);
  }

  public setChecksStatus(len: number, status: boolean) {
    this.checks = [];
    for (let i = 0; i < len; i++) {
      this.checks[i] = status;
    }
  }

  public async restoreSelected() {
    try {
      this.loadingRes = true;

      const ids = [];
      this.checks.forEach((sel, ix) => {
        if (sel) ids.push(this.archived[ix]._id);
      });

      await ArchiveStore.macRestoreEntries({ ids });
      this.loadingRes = false;
    } catch (err) {
      this.loadingRes = false;
    }

    // load again
    await this.loadArchives();
  }

  public async deleteSelected() {
    try {
      this.loadingDel = true;

      const ids = [];
      this.checks.forEach((sel, ix) => {
        if (sel) ids.push(this.archived[ix]._id);
      });

      await ArchiveStore.macDeleteEntries({ ids });
      this.loadingDel = false;
      this.deleteDialog = false;
    } catch (err) {
      this.loadingDel = false;
    }

    // load again
    await this.loadArchives();
  }
}
</script>
