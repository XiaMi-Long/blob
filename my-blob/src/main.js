/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 17:53:50
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
  ],
});

createApp(App).use(store).use(router).use(naive).mount("#app");
