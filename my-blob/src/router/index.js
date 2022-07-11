import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: import("../views/index.vue"),
    children: [
      {
        path: "/home",
        components: {
          default: import("../views/Body/Blob/index.vue"),
          BreadcrumbView: import("../views/Breadcrumb/index.vue"),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
