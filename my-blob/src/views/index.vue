<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 17:06:49
-->
<template>
  <div class="home">
    <n-layout style="height: 360px">
      <n-layout-header>
        <router-view
          class="view left-sidebar"
          name="BreadcrumbView"
        ></router-view>
      </n-layout-header>
      <router-view class="view main-content"></router-view>
    </n-layout>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
