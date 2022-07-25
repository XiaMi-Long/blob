<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 17:08:56
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-25 22:04:55
-->
<template>
  <div class="logo">
    <router-link to="/home">
      <img src="img/system-images/logo.jpg" alt="" class="logo-img" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbLogo",

  setup() {
    return {};
  },

  methods: {},
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
