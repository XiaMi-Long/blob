<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 22:41:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 22:51:06
-->
<template>
  <div>
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
import { h } from "vue";
import { RouterLink } from "vue-router";
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

export default {
  name: "BreadcrumbTitle",
  setup() {
    return {
      menuOptions,
    };
  },
};
</script>

<style lang="scss" scoped></style>
