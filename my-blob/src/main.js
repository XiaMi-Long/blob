/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-27 21:50:40
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
  NImage,
  NSpace,
  NMenu,
  NLayout,
  NIcon,
  NCard,
  NEmpty,
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
  NMessageProvider,
  NSkeleton,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NSpace,
    NImage,
    NMenu,
    NLayout,
    NIcon,
    NCard,
    NEmpty,
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
    NMessageProvider,
    NSkeleton,
  ],
});

createApp(App).use(store).use(router).use(naive).mount("#app");
