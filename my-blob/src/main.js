/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 15:36:51
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
} from "naive-ui";

const naive = create({
  components: [NButton, NSpace],
});
createApp(App).use(store).use(router).use(naive).mount("#app");
