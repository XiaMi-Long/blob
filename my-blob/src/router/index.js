/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 23:28:51
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: import("../views/index.vue"),
    children: [
      {
        path: "home",
        name: "home",
        components: {
          main: import("../views/Body/Blob/index.vue"),
          BreadcrumbView: import("../views/Breadcrumb/index.vue"),
        },
      },
      {
        path: "user",
        name: "user",
        components: {
          main: import("../views/User/index.vue"),
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
