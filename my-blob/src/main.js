/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-18 22:37:15
 */
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
// 加载全局css变量
import "@/style/index.css";

import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NMenu,
  NLayout,
  NIcon,
  NCard,
  NGrid,
  NGridItem,
  NLayoutHeader,
  NLayoutContent,
  NRadio,
  NEllipsis,
  NAvatar,
  NPagination,
  NTooltip,
  NConfigProvider,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NSpace,
    NMenu,
    NLayout,
    NIcon,
    NCard,
    NGrid,
    NGridItem,
    NLayoutHeader,
    NLayoutContent,
    NRadio,
    NEllipsis,
    NAvatar,
    NPagination,
    NTooltip,
    NConfigProvider,
  ],
});

createApp(App).use(store).use(router).use(naive).mount("#app");
