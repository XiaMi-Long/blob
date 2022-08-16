<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-16 15:56:27
-->
<template>
  <n-config-provider :theme="isDark">
    <div class="home">
      <n-layout>
        <n-layout-header id="home-header" data-id="home">
          <router-view
            class="view left-sidebar"
            name="BreadcrumbView"
          ></router-view>
        </n-layout-header>
        <n-layout-content>
          <router-view
            class="view main-content"
            name="main"
            :class="key"
            :key="key"
            v-slot="{ Component }"
          >
            <keep-alive :include="notKeepAlivePageArray">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </n-layout-content>
      </n-layout>
    </div>
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui";
import { computed } from "vue";
import { useStore } from "vuex";
import { notKeepAlivePageArray } from "@/router/index.js";
import { useRoute } from "vue-router";

export default {
  name: "HomeView",
  components: {},

  setup() {
    const store = useStore();
    const route = useRoute();

    // 执行博客文章展示数据初始化
    store.commit("SET_HOME_PAGE_OBJECT");
    // 执行手机端判断
    if (window.innerWidth < 800) {
      store.commit("SET_PC", false);
    }

    const getIsDark = computed(() => store.getters.getIsDark);
    const isDark = computed(() => {
      return getIsDark.value ? darkTheme : null;
    });
    // 对关于本站路由的页面加载新的实例,防止组件复用,导致页面无变化
    const key = computed(() => {
      if (route.name !== "about") {
        return "";
      } else {
        return "about";
      }
    });

    return {
      key,
      isDark,
      notKeepAlivePageArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.n-layout-header {
  height: 65px;
}
</style>

<style lang="scss">
// 顶部菜单固定
.home-header-fixed {
  position: fixed;

  z-index: 2;
}
</style>
