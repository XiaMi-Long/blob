<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 22:41:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-16 15:53:30
-->
<template>
  <div class="menu">
    <n-space>
      <div class="box">
        <span class="item" @click="goHome">首页</span>
        <span class="item" @click="openMusicDialog" v-if="isHaveSong && isPc"
          >音乐</span
        >
        <span class="item" @click="goAbout">关于本站</span>
        <span class="item"
          ><a
            href="https://github.com/XiaMi-Long/blob/tree/master"
            class="github-link"
            target="_blank"
          >
            Github</a
          ></span
        >
      </div>
    </n-space>

    <MusicView v-if="isHaveSong && isPc"></MusicView>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbTtile",
};
</script>
<script setup>
import { useStore } from "vuex";
import { ref, provide, computed } from "vue";
import { useRouter } from "vue-router";

import MusicView from "./Music/MusicView.vue";

const router = useRouter();
const store = useStore();

const songArray = store.getters.getSongArray;
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

function goAbout() {
  router.push(`/about/关于本站`);
}

const isHaveSong = computed(() => songArray.length > 0);
const isPc = computed(() => store.state.isPc);
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
.github-link {
  text-decoration: none;

  color: var(--n-text-color);

  &:hover {
    color: #12b697;
  }
}
</style>
