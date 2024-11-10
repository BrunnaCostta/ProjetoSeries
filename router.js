// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AppHomeHome from "./src/components/AppMenu.vue",

const routes = [
  {
    path: "/home",
    name: "AppHome",
    component: AppHome,
  },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     component: About,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
