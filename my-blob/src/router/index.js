import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: {
      default: import("../views/Body/Blob/index.vue"),
      Breadcrumb: import("../views/Breadcrumb/index.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
