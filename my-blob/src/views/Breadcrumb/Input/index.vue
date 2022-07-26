<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 17:28:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 22:21:44
-->
<template>
  <div class="input-box">
    <input type="text" class="input" v-model.trim="inputValue" />
    <n-icon size="30" @click="handleIconClick" title="搜索" class="search-icon">
      <Search></Search>
    </n-icon>
  </div>
</template>

<script>
import { Search } from "@vicons/ionicons5";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "BreadcrumbInput",

  components: {
    Search,
  },

  setup() {
    const store = useStore();

    let inputValue = ref("");

    return { store, inputValue };
  },

  methods: {
    /* 处理点击图标事件 */
    handleIconClick() {
      this.store.commit("SET_HOME_PAGE_OBJECT", {
        searchValue: this.inputValue,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: inline-block;

  width: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px;

  .input {
    background-color: var(--header-search-input-background-color);

    border: 0;
    border-bottom: 2px solid black;

    line-height: 25px;

    outline: none;

    color: var(--header-search-input-text-color);

    width: 50%;
  }

  .search-icon {
    cursor: pointer;
  }
}

@media screen and (max-width: 600px) {
  .input-box {
    display: none;
  }
}
</style>
