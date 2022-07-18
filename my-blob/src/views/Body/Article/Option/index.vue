<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-16 20:56:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-18 22:38:41
-->
<template>
  <div class="article-option-box">
    <div class="content">
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
import { cssVarUtils, hideHeader, showHeader } from "@/utils/common/index";
import {
  MoonSharp,
  SunnyOutline,
  EyeOutline,
  EyeOffOutline,
} from "@vicons/ionicons5";

export default {
  name: "ArticleOptionView",

  components: {
    MoonSharp,
    SunnyOutline,
    EyeOutline,
    EyeOffOutline,
  },

  setup() {
    const store = useStore();
    const skinConfig = {
      darkBackgroundColor: "#323232",
      darkTextColor: "#ddd",
      lightBackgroudColor: "white",
      lightTextColor: "black",
    };
    // 是否头部header已经隐藏,默认没有隐藏
    let isShowHeader = ref(false);

    const nowDark = computed(() => store.state.isDark === true);
    const nowHide = computed(() => isShowHeader.value === true);

    // 本页面卸载前要恢复headere
    onUnmounted(() => {
      console.log(1);
      showHeader();
    });

    return {
      isShowHeader,
      nowDark,
      nowHide,
      store,
      skinConfig,
    };
  },

  methods: {
    // 点击黑夜模式图标
    handleDarkIconClick() {
      const setCssVar = new cssVarUtils();
      // 设置md页面背景颜色
      setCssVar.setVar(
        "--article-background-color",
        this.skinConfig.darkBackgroundColor
      );
      // 设置md页面文字颜色
      setCssVar.setVar("--article-text-color", this.skinConfig.darkTextColor);
      // 更改是否暗黑样式的store
      this.store.commit("SET_THEME", true);
    },

    // 点击白天模式图标
    handleSunnyIconClick() {
      const setCssVar = new cssVarUtils();
      // 设置md页面背景颜色
      setCssVar.setVar(
        "--article-background-color",
        this.skinConfig.lightBackgroudColor
      );
      // 设置md页面文字颜色
      setCssVar.setVar("--article-text-color", this.skinConfig.lightTextColor);
      // 更改是否暗黑样式的store
      this.store.commit("SET_THEME", false);
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
