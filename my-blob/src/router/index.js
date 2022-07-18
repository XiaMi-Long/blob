/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-18 22:37:01
 */
import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";

/**
 * keepAlive:页面是否缓存
 *
 *
 *
 */
const routes = [
  {
    path: "",
    name: "index",
    component: Index,
    children: [
      {
        path: "home",
        name: "home",
        components: {
          main: () =>
            import(
              /* webpackChunkName: "blobIndex" */ "@/views/Body/Blob/index.vue"
            ),
          BreadcrumbView: () =>
            import(
              /* webpackChunkName: "Breadcrumb" */ "@/views/Breadcrumb/index.vue"
            ),
        },
        meta: { keepAlive: true },
      },
      {
        path: "user",
        name: "user",
        components: {
          main: () =>
            import(
              /* webpackChunkName: "userIndex" */ "@/views/User/index.vue"
            ),
          BreadcrumbView: () =>
            import(
              /* webpackChunkName: "Breadcrumb" */ "@/views/Breadcrumb/index.vue"
            ),
        },
        meta: { keepAlive: true },
      },
      {
        path: "article/:id",
        name: "article",
        components: {
          main: () =>
            import(
              /* webpackChunkName: "ArticleIndex" */ "@/views/Body/Article/index.vue"
            ),
          BreadcrumbView: () =>
            import(
              /* webpackChunkName: "Breadcrumb" */ "@/views/Breadcrumb/index.vue"
            ),
        },
        meta: { keepAlive: false },
      },
    ],
  },
];

/* 不允许缓存的页面 */
const notKeepAlivePageArray = [];
const getKeepAliveValue = function (obj) {
  if (obj?.meta?.keepAlive === false) {
    notKeepAlivePageArray.push({ name: obj.name });
  }
  if (obj?.children) {
    obj.children.forEach((item) => {
      getKeepAliveValue(item);
    });
  }
};
routes.forEach((item) => {
  getKeepAliveValue(item);
});

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { router, notKeepAlivePageArray };
