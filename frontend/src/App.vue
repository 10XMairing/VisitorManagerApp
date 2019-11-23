<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          router
          :to="nav.route"
          v-for="(nav, ix) in navLinks"
          :key="`ab${ix}`"
          link
        >
          <v-list-item-action>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ nav.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue-grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Visitors Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="ml-5"
        outlined
        target="_blank"
        :href="source"
        dark
        v-on="on"
      >
        Source Code
        <v-icon right>fab fa-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content
      :class="[{ 'mx-3': this.$vuetify.breakpoint.mdAndUp }, 'min-vh']"
    >
      <router-view></router-view>
    </v-content>
    <footer-comp />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FooterComp from "./components/Footer.vue";

@Component({
  components: {
    FooterComp
  }
})
export default class App extends Vue {
  drawer = false;
  source = "https://github.com/10XMairing/VisitorManagerApp";
  navLinks = [
    {
      name: "Home",
      icon: "mdi-home",
      route: { name: "home" }
    },
    {
      name: "Add Entry",
      icon: "add",
      route: { name: "add-record" }
    },
    {
      name: "Archives",
      icon: "archive",
      route: { name: "archives" }
    },
    {
      name: "Manage Hosts",
      icon: "person",
      route: { name: "manage-host" }
    }
  ];
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.min-vh {
  min-height: 90vh;
}
</style>
