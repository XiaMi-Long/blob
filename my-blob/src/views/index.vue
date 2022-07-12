<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 11:20:26
-->
<template>
  <div class="home">
    <n-layout>
      <n-layout-header>
        <router-view
          class="view left-sidebar"
          name="BreadcrumbView"
        ></router-view>
      </n-layout-header>
      <n-layout-content>
        <router-view class="view main-content" name="main"></router-view>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.n-layout-header {
  height: 65px;
}
</style>
