<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-18 22:49:42
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-21 23:08:12
-->
<template>
  <div class="breadcrumb-icon">
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon
          v-show="!nowDark"
          size="25"
          @click="handleDarkIconClick"
          class="option-dark-icon option-icon"
        >
          <MoonSharp></MoonSharp>
        </n-icon>
      </template>
      黑夜模式
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon
          v-show="nowDark"
          size="25"
          @click="handleSunnyIconClick"
          class="option-sunny-icon option-icon"
        >
          <SunnyOutline></SunnyOutline> </n-icon
      ></template>
      白天模式
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon
          size="30"
          class="option-full-icon option-icon"
          @click="handleFullScreenIconClick"
        >
          <FullscreenRound></FullscreenRound> </n-icon
      ></template>
      全屏
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon
          size="30"
          class="option-full-icon option-icon"
          @click="handleFixedIconClick"
        >
          <WebAssetSharp></WebAssetSharp> </n-icon
      ></template>
      固定头部菜单
    </n-tooltip>
  </div>
</template>

<script>
import { MoonSharp, SunnyOutline } from "@vicons/ionicons5";
import { FullscreenRound, WebAssetSharp } from "@vicons/material";
import { useStore } from "vuex";
import { computed } from "vue";
import { goDarkTheme, goLight } from "@/utils/common/api.js";
export default {
  name: "BreadcrumbIcon",

  components: {
    MoonSharp,
    SunnyOutline,
    FullscreenRound,
    WebAssetSharp,
  },

  setup() {
    const store = useStore();

    const nowDark = computed(() => store.state.isDark === true);
    return { nowDark, store };
  },

  methods: {
    // 点击黑夜模式图标
    handleDarkIconClick() {
      goDarkTheme(this.store);
    },

    // 点击白天模式图标
    handleSunnyIconClick() {
      goLight(this.store);
    },

    // 点击全屏图标
    handleFullScreenIconClick() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        return;
      }

      document.documentElement.requestFullscreen();
    },

    // 点击固定顶部菜单图标
    handleFixedIconClick() {
      const homeHeader = document.getElementById("home-header");
      if (homeHeader !== null) {
        homeHeader.classList.toggle("home-header-fixed");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-icon {
  display: flex;
  align-items: center;
}
.option-icon {
  cursor: pointer;

  margin: 0 10px;
}
</style>
