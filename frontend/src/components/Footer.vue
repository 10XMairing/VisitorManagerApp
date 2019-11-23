<template>
  <v-footer color="grey darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="text-center px-3 py-4 white--text">
        <p>
          <strong>Visitor Management Software</strong>
          <br />Life is awesome.
        </p>
        <br />
      </v-col>
      <v-col class="text-center py-4 white--text" cols="12">
        <strong>Social</strong>
        <br />
        <v-btn
          class="px-2 white--text"
          text
          icon
          :href="item.link"
          target="_blank"
          v-for="(item, index) in social"
          :key="index"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-col>

      <v-col class="grey darken-4 py-4 text-center white--text" cols="12">
        <small class="font-weight-bold ml-3">
          Built With Vue.Js
          <v-btn
            text
            color="white"
            icon
            href="https://vuejs.org/"
            target="_blank"
          >
            <v-icon>mdi-vuetify</v-icon>
          </v-btn>
        </small>
      </v-col>
      <v-col class="grey darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Mairingdao Hojai</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  public links = ["Home", "About", "Facebook"];

  public social = [
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      link: "https://facebook.com/mairing"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mairingdao-hojai-a4149516a/"
    },
    {
      name: "Github",
      icon: "fab fa-github",
      link: "https://github.com/10xmairing"
    }
  ];
}
</script>

<style scoped>
ul {
  list-style: none;
}

li > a {
  text-decoration: none;
}
</style>
