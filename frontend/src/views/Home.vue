<template>
  <div>
    <v-text-field v-if="!pageLoaded" loading color="success"></v-text-field>
    <div v-else>
      <v-toolbar flat>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn
              :disabled="!anySelected"
              :loading="loadingArc"
              @click="archiveSelected"
              color="primary"
              icon
              v-on="on"
            >
              <v-icon>archive</v-icon>
            </v-btn>
          </template>
          <span>Archive Selected</span>
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
        <v-toolbar-title>Visitor Entries</v-toolbar-title>
      </v-toolbar>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">
              <v-checkbox v-model="checkall"></v-checkbox>
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
          <tr v-for="(item, ix) in entries" :key="`asd${ix}`">
            <td>
              <v-checkbox v-model="checks[ix]" color="primary"></v-checkbox>
            </td>
            <td @click="handleRowClick(ix)">{{ item.name }}</td>
            <td @click="handleRowClick(ix)">{{ item.phone }}</td>
            <td @click="handleRowClick(ix)">{{ item.email }}</td>
            <td @click="handleRowClick(ix)">{{ item.address }}</td>
            <td @click="handleRowClick(ix)">
              {{ item.host ? item.host.name : "unknown" }}
            </td>
            <td @click="handleRowClick(ix)">{{ getDate(item.checkin) }}</td>
            <td @click="handleRowClick(ix)">{{ getDate(item.checkout) }}</td>
          </tr>
        </tbody>
      </v-simple-table>

      <!-- view data -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card v-if="currUser">
          <v-card-title>
            <span class="headline">User Checkout Form</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    label="Name"
                    :value="currUser.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    readonly
                    label="Email"
                    :value="currUser.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    label="Phone"
                    :value="currUser.phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    label="Address"
                    :value="currUser.address"
                  ></v-text-field>
                </v-col>

                <template v-if="currUser.host">
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      readonly
                      label="Host Name"
                      :value="currUser.host.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      readonly
                      label="Host Email"
                      :value="currUser.host.email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      readonly
                      label="Host Phone"
                      :value="currUser.host.phone"
                    ></v-text-field>
                  </v-col>
                </template>

                <v-col cols="12" md="6">
                  <v-text-field
                    readonly
                    label="Checked IN @"
                    :value="getDate(currUser.checkin)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" v-if="currUser.checkout">
                  <v-text-field
                    readonly
                    label="Checked OUT @"
                    :value="getDate(currUser.checkout)"
                  ></v-text-field>
                </v-col>

                <v-col cols="12"></v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn
              :loading="loadingSave"
              color="blue lignten-3"
              :dark="currUser.checkout == undefined"
              :disabled="!(currUser.checkout == undefined)"
              @click="checkoutUser"
              >Check Out</v-btn
            >
          </v-card-actions>

          <v-alert v-show="alert.show" :type="alert.type">
            {{ alert.message }}
          </v-alert>
        </v-card>
      </v-dialog>

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
import Controller from "../store/modules/HomeModule";

import { parseDateString } from "../utils";
import HomeModule from "../store/modules/HomeModule";

@Component({
  components: {}
})
export default class Home extends Vue {
  selected = -1;
  loadingSave = false;
  loadingArc = false;
  loadingDel = false;
  pageLoaded = false;
  deleteDialog = false;

  alert = {
    type: "success",
    message: "unknown",
    show: false
  };

  get anySelected() {
    for (var i = 0; i < this.checks.length; i++) {
      if (this.checks[i]) {
        return true;
      }
    }
    return false;
  }

  checks = [];
  checkall = false;

  @Watch("checkall")
  onChangeCheckAll(val: boolean, oldVal: boolean) {
    if (val) {
      // is check all
      this.setChecksStatus(this.entries.length, true);
    } else {
      // uncheck all
      this.setChecksStatus(this.entries.length, false);
    }
  }

  get currUser() {
    return this.entries[this.selected];
  }

  public handleRowClick(ix: number) {
    // open dialog

    this.hideAlert();
    this.dialog = !this.dialog;
    this.selected = ix;
  }

  public async loadData() {
    this.pageLoaded = false;
    await Controller.macLoadEntries();
    this.pageLoaded = true;
    // reset checks
    this.setChecksStatus(this.entries.length, false);
  }

  async created() {
    await this.loadData();
  }
  dialog = false;

  get entries() {
    return Controller.getEntries;
  }

  public getDate(datestr: string) {
    return parseDateString(datestr);
  }

  public async checkoutUser() {
    this.loadingSave = true;
    try {
      await Controller.macCheckout(this.currUser._id);
      this.loadingSave = false;
      this.showAlert("success", "Checked Out User");
      setTimeout(() => {
        this.dialog = false;
      }, 1500);
      this.loadData();
    } catch (err) {
      this.loadingSave = false;
      this.showAlert("error", "Error checking out user");
    }
  }

  showAlert(type: string, message: string) {
    this.alert = { type, message, show: true };
  }

  hideAlert() {
    this.alert.show = false;
  }

  public setChecksStatus(len: number, status: boolean) {
    this.checks = [];
    for (let i = 0; i < len; i++) {
      this.checks[i] = status;
    }
  }

  public async archiveSelected() {
    try {
      this.loadingArc = true;

      const ids = [];
      this.checks.forEach((sel, ix) => {
        if (sel) ids.push(this.entries[ix]._id);
      });

      await HomeModule.macArchiveEntries({ ids });
      this.loadingArc = false;
    } catch (err) {
      this.loadingArc = false;
    }

    // load again
    await this.loadData();
  }

  public async deleteSelected() {
    try {
      this.loadingDel = true;

      const ids = [];
      this.checks.forEach((sel, ix) => {
        if (sel) ids.push(this.entries[ix]._id);
      });

      await HomeModule.macDeleteEntries({ ids });
      this.loadingDel = false;
      this.deleteDialog = false;
    } catch (err) {
      this.loadingDel = false;
    }

    // load again
    await this.loadData();
  }
}
</script>
