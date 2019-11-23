<template>
  <div>
    <v-row justify="center" v-if="pageLoaded">
      <v-col cols="12" lg="6" md="8">
        <v-card class="pa-4 card">
          <v-toolbar flat>
            <v-btn icon>
              <v-icon size="60">event_note</v-icon>
            </v-btn>

            <v-toolbar-title>New Visitor Entry</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="user.name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.phone"
              label="Phone"
              counter="10"
              :rules="phoneRules"
              prefix="+91"
              type="number"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.address"
              :rules="addressRules"
              label="Address"
              required
            ></v-text-field>

            <v-divider class="py-3"></v-divider>
            <span class="font-weight-medium">Host Details</span>
            <span>
              <small class="mx-4">(Select a host from right menu)</small>
            </span>

            <v-text-field
              readonly
              v-model="user.host.name"
              :rules="nameRules"
              label="Host Name"
              required
            ></v-text-field>

            <v-text-field
              readonly
              v-model="user.host.email"
              :rules="emailRules"
              label="Host E-mail"
              required
            ></v-text-field>

            <v-text-field
              readonly
              v-model="user.host.phone"
              prefix="+91"
              label="Host Phone"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              @click="submitAndSave"
              class="mt-2 mr-4"
              color="primary"
              >Submit</v-btn
            >

            <v-btn color="warning" outlined class="mt-2 mr-4" @click="reset"
              >Reset Form</v-btn
            >

            <v-btn
              color="warning"
              class="mt-2"
              outlined
              @click="resetValidation"
              >Reset Validation</v-btn
            >
            <v-alert v-show="alert.show" :type="alert.type" class="my-3">{{
              alert.message
            }}</v-alert>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" lg="3" md="4">
        <v-card max-width="500" class="mx-auto">
          <v-toolbar color="blue-grey darken-3" dense dark>
            <v-toolbar-title>Hosts List</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list>
            <template v-for="(item, ix) in hosts">
              <v-list-item @click="handleClick(item)" :key="`ab${ix}`">
                <v-list-item-icon>
                  <v-icon color="pink">{{ item.name.charAt(0) }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="`ko-${ix}`"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-text-field v-else loading color="success"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Controller from "../store/modules/HomeModule";
import { IHostResponse } from "../../../registry/src/interface/IHost";

@Component({
  components: {}
})
export default class ManageHost extends Vue {
  valid = false;
  pageLoaded = false;
  phoneMask = "##########";

  alert = { show: false, type: "success", message: "unknown activity" };

  user = {
    name: "",
    email: "",
    address: "",
    phone: "",
    host: {
      name: "",
      email: "",
      phone: ""
    }
  };

  get hosts() {
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
    v => !!v || "Name is required",
    v => (v && v.length <= 50) || "Name must be less than 50 characters"
  ];

  emailRules = [
    v => !!v || "E-mail is required",
    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ];
  addressRules = [v => !!v || "Address is required"];
  phoneRules = [v => (v && v.length == 10) || "Phone Number length must be 10"];

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
        await Controller.macAddEntry(this.user);
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

  public handleClick(user: IHostResponse) {
    this.user.host.name = user.name;
    this.user.host.phone = user.phone;
    this.user.host.email = user.email;
  }
}
</script>
