import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/add-record",
    name: "add-record",
    component: () => import("../views/AddEntry.vue")
  },
  {
    path: "/archives",
    name: "archives",
    component: () => import("../views/Archive.vue")
  },
  {
    path: "/manage-host",
    name: "manage-host",
    component: () => import("../views/ManageHosts.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
