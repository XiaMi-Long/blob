<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-16 20:56:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-21 22:57:56
-->
<template>
  <div class="article-option-box">
    <div class="content">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon
            size="35"
            @click="handleEnlargeIconClick"
            class="option-enlarge-icon option-icon"
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
            @click="handleLessonIconClick"
            class="option-less-icon option-icon"
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
    // 现在页面内容放大到什么程度了
    let zoomLevel = ref(1);

    const nowDark = computed(() => store.state.isDark === true);
    const nowHide = computed(() => isShowHeader.value === true);

    // 本页面卸载前要恢复headere
    onUnmounted(() => {
      showHeader();
    });

    return {
      isShowHeader,
      zoomLevel,
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

    // 点击放大图标
    handleEnlargeIconClick() {
      const content = document.getElementsByClassName("article-zoom-content");
      if (content.length === 0) {
        throw new Error("放大获取dom异常");
      }
      // 最高放大四级
      if (this.zoomLevel === 4) {
        this.zoomLevel = 0;
      }

      this.zoomLevel++;
      content[0].style.zoom = this.zoomLevel;
    },

    // 点击缩小图标
    handleLessonIconClick() {
      const content = document.getElementsByClassName("article-zoom-content");
      if (content.length === 0) {
        throw new Error("放大获取dom异常");
      }

      if (this.zoomLevel === 1) {
        return;
      }

      this.zoomLevel--;
      content[0].style.zoom = this.zoomLevel;
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

    .option-enlarge-icon {
      &:active {
        transform: scale(1.4);
      }
    }

    .option-less-icon {
      &:active {
        transform: scale(0.7);
      }
    }
  }
}
</style>
