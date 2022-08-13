<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 22:41:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-13 16:15:35
-->
<template>
  <div class="menu">
    <n-space>
      <div class="box">
        <span class="item" @click="goHome">首页</span>
        <span class="item" @click="openMusicDialog">音乐</span>
      </div>
    </n-space>

    <MusicView></MusicView>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbTtile",
};
</script>
<script setup>
import { ref, provide } from "vue";
import { useRouter } from "vue-router";

import MusicView from "./Music/MusicView.vue";

const router = useRouter();

// 是否开启音乐弹窗
const isOpenMusicDialog = ref(false);

function goHome() {
  router.push({ name: "home" });
}

function openMusicDialog() {
  isOpenMusicDialog.value = true;
}

function setIsOpenMusicDialogValue() {
  isOpenMusicDialog.value = false;
}

provide("isOpenMusicDialog", { isOpenMusicDialog, setIsOpenMusicDialogValue });
</script>

<style lang="scss" scoped>
.menu {
  width: 70%;

  .box {
    .item {
      cursor: pointer;

      margin: 0 20px;

      &:hover {
        color: #12b697;
      }
    }
  }
}
</style>
