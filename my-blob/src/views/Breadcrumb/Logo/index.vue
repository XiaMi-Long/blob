<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 17:08:56
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 17:50:59
-->
<template>
  <div></div>
</template>

<script>
import { h } from "vue";
export default {
  name: "BreadcrumbLogo",

  setup() {
    return () =>
      h("div", { class: "logo" }, [
        h(
          "img",
          {
            class: "logo-img",
            src: require("../../../assets/images/logo.jpg"),
          },
          ""
        ),
      ]);
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: contents;

  &-img {
    width: 50px;
    height: 50px;

    border-radius: 5px;
  }
}
</style>
