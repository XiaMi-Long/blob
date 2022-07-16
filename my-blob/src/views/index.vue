<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 10:44:27
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-16 22:33:38
-->
<template>
  <n-config-provider :theme="isDark">
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
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {},

  setup() {
    const store = useStore();
    const getIsDark = computed(() => store.getters.getIsDark);
    const isDark = computed(() => {
      return getIsDark.value ? darkTheme : null;
    });

    return {
      isDark,
    };
  },
};
</script>

<style lang="scss" scoped>
.n-layout-header {
  height: 65px;
}
</style>
