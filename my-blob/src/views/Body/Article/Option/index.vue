<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-16 20:56:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-20 21:02:12
-->
<template>
  <div class="article-option-box">
    <div class="content">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon
            size="35"
            @click="handleDarkIconClick"
            class="option-dark-icon option-icon"
          >
            <PlusRound></PlusRound>
          </n-icon>
        </template>
        放大
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon
            size="35"
            @click="handleDarkIconClick"
            class="option-dark-icon option-icon"
          >
            <Subtract24Filled></Subtract24Filled>
          </n-icon>
        </template>
        缩小
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon
            v-show="!nowDark"
            size="35"
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
            size="35"
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
            v-show="nowHide"
            size="35"
            @click="handleShowHeaderIconClick"
            class="option-sunny-icon option-icon"
          >
            <EyeOffOutline></EyeOffOutline> </n-icon
        ></template>
        显示头部
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon
            v-show="!nowHide"
            size="35"
            @click="handleHideHeaderIconClick"
            class="option-sunny-icon option-icon"
          >
            <EyeOutline></EyeOutline>
          </n-icon>
        </template>
        隐藏头部
      </n-tooltip>
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import { hideHeader, showHeader } from "@/utils/common/index";
import { goDarkTheme, goLight } from "@/utils/common/api.js";
import {
  MoonSharp,
  SunnyOutline,
  EyeOutline,
  EyeOffOutline,
} from "@vicons/ionicons5";
import { PlusRound } from "@vicons/material";
import { Subtract24Filled } from "@vicons/fluent";

export default {
  name: "ArticleOptionView",

  components: {
    MoonSharp,
    SunnyOutline,
    EyeOutline,
    EyeOffOutline,
    PlusRound,
    Subtract24Filled,
  },

  setup() {
    const store = useStore();

    // 是否头部header已经隐藏,默认没有隐藏
    let isShowHeader = ref(false);

    const nowDark = computed(() => store.state.isDark === true);
    const nowHide = computed(() => isShowHeader.value === true);

    // 本页面卸载前要恢复headere
    onUnmounted(() => {
      showHeader();
    });

    return {
      isShowHeader,
      nowDark,
      nowHide,
      store,
    };
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

    // 点击隐藏顶部图标
    handleHideHeaderIconClick() {
      hideHeader();
      this.isShowHeader = true;
    },

    // 点击显示顶部图片
    handleShowHeaderIconClick() {
      showHeader();
      this.isShowHeader = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.article-option-box {
  position: fixed;

  right: 5%;
  bottom: 10%;

  .content {
    display: flex;
    flex-direction: column;

    .option-icon {
      cursor: pointer;

      margin: 10px 0;
    }
  }
}
</style>
