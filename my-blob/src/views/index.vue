<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 15:56:27
-->
<template>
  <div class="home">
    <router-view class="view left-sidebar" name="Breadcrumb"></router-view>
    <router-view class="view main-content"></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
