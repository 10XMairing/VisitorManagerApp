<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="8">
        <v-card class="pa-4 card">
          <v-toolbar flat>
            <v-btn icon>
              <v-icon size="60">person</v-icon>
            </v-btn>

            <v-toolbar-title>Add Host</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="host.name" :rules="nameRules" label="Host Name" required></v-text-field>

            <v-text-field v-model="host.email" :rules="emailRules" label="Host E-mail" required></v-text-field>

            <v-text-field
              v-model="host.phone"
              :rules="phoneRules"
              label="Host Phone"
              counter="10"
              prefix="+91"
              type="number"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              :loading="loadingSave"
              @click="addHost"
              class="mt-2 mr-4"
              color="primary"
            >Submit</v-btn>

            <v-btn color="warning" outlined class="mt-2 mr-4" @click="reset">Reset Form</v-btn>

            <v-btn color="warning" class="mt-2" outlined @click="resetValidation">Reset Validation</v-btn>
            <v-alert v-show="alert.show" :type="alert.type" class="my-3">
              {{
              alert.message
              }}
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" lg="7" md="8" justify="center" align="center">
        <div v-if="pageLoaded">
          <v-divider></v-divider>
          <v-toolbar flat>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="deleteDialog = true"
                  :disabled="!anySelected"
                  color="primary"
                  icon
                  v-on="on"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </template>
              <span>Delete Selected</span>
            </v-tooltip>

            <v-toolbar-title>Hosts List</v-toolbar-title>
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, ix) in hostList" :key="`asd${ix}`">
                  <td>
                    <v-checkbox v-model="checks[ix]" color="primary"></v-checkbox>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <v-text-field v-else loading color="success"></v-text-field>

        <!-- delete dialog prompt -->
        <v-dialog v-model="deleteDialog" max-width="400px">
          <v-card>
            <v-card-title class="headline">Confirm Delete?</v-card-title>

            <v-card-text>
              This Action cannot be reverted.All data for this host will be
              removed.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-1" text @click="deleteDialog = false">cancel</v-btn>

              <v-btn color="blue darken-1" :loading="loadingDel" text @click="deleteSelected">DELETE</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Controller from "../store/modules/HomeModule";
import { IHostResponse } from "../../../registry/src/interface/IHost";

@Component({
  components: {}
})
export default class ManageHost extends Vue {
  pageLoaded = false;
  deleteDialog = false;
  loadingDel = false;
  loadingSave = false;
  valid = false;
  checkall = false;
  checks: string[] = [];

  alert = { show: false, type: "success", message: "unknown activity" };

  host = { name: "", email: "", phone: "" };

  get hostList() {
    return Controller.getHosts;
  }

  async created() {
    await this.loadHosts();
  }
  public async loadHosts() {
    this.pageLoaded = false;
    try {
      await Controller.macGetAllHosts();
      this.pageLoaded = true;
    } catch (err) {
      this.pageLoaded = true;
    }
  }

  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 50) || "Name must be less than 50 characters"
  ];

  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ];
  addressRules = [(v: string) => !!v || "Address is required"];
  phoneRules = [
    (v: string) => (v && v.length == 10) || "Phone Number length must be 10"
  ];

  validate() {
    this.$refs.form.validate();
  }

  reset() {
    this.$refs.form.reset();
  }
  resetValidation() {
    this.$refs.form.resetValidation();
  }

  async submitAndSave() {
    this.validate();
    if (this.valid) {
      try {
        this.showAlert("success", "Added new Host");
        this.reset();
      } catch (err) {
        this.showAlert("error", "failed to add new host");
      }
    }
  }

  showAlert(type: string, message: string) {
    this.alert = { show: true, type, message };
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

  @Watch("checkall")
  onChangeCheckAll(val: boolean, oldVal: boolean) {
    if (val) {
      // is check all
      this.setChecksStatus(this.hostList.length, true);
    } else {
      // uncheck all
      this.setChecksStatus(this.hostList.length, false);
    }
  }

  get anySelected() {
    for (var i = 0; i < this.checks.length; i++) {
      if (this.checks[i]) {
        return true;
      }
    }
    return false;
  }

  public async deleteSelected() {
    try {
      this.loadingDel = true;

      const ids: string[] = [];
      this.checks.forEach((sel, ix) => {
        if (sel) ids.push(this.hostList[ix]._id);
      });

      await Controller.macDeleteHosts({ ids });
      this.loadingDel = false;
      this.deleteDialog = false;
    } catch (err) {
      this.loadingDel = false;
    }

    // load again
    await this.loadHosts();
  }

  public async addHost() {
    try {
      this.loadingSave = true;
      await Controller.macAddHost(this.host);
      this.loadingSave = false;

      this.reset();
      await this.loadHosts();
    } catch (err) {
      this.loadingSave = false;
    }
  }
}
</script>
