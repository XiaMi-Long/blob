<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 22:41:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-19 21:47:47
-->
<template>
  <div class="menu">
    <n-space>
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
      />
    </n-space>
  </div>
</template>

<script>
import { h, ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "BreadcrumbTitle",
  setup() {
    const menuOptions = [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "home",
              },
            },
            {
              default: () => "Home",
            }
          ),
        key: "home",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "user",
              },
            },
            {
              default: () => "User",
            }
          ),
        key: "user",
      },
    ];
    const activeKey = ref("");
    return {
      activeKey,
      menuOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 70%;
}
</style>
