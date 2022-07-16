<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 17:28:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-16 22:59:44
-->
<template>
  <div class="input-box">
    <input
      type="text"
      class="input"
      :style="inputWidth"
      v-model.trim="inputValue"
      @input="handleInputChange"
    />
    <n-icon size="30" @click="handleIconClick" title="搜索">
      <Search></Search>
    </n-icon>
  </div>
</template>

<script>
import { Search } from "@vicons/ionicons5";
import { ref, onMounted } from "vue";

export default {
  name: "BreadcrumbInput",

  components: {
    Search,
  },

  setup() {
    let isShowInput = ref(false);
    let inputWidth = ref({
      width: "0%",
      borderBottom: "none",
    });
    let inputValue = ref("");

    onMounted(() => {});
    return { isShowInput, inputWidth, inputValue };
  },

  methods: {
    /* 处理点击图标事件 */
    handleIconClick() {
      this.isShowInput = !this.isShowInput;
      if (this.isShowInput) {
        this.inputWidth.width = "50%";
        this.inputWidth.borderBottom = "2px solid black";
      } else {
        this.inputWidth.width = "0%";
        this.inputWidth.borderBottom = "none";
      }
    },
    /* 处理输入框输入事件 */
    handleInputChange() {
      console.log(this.inputValue);
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
    border-bottom: 2px dashed black;

    line-height: 25px;

    outline: none;

    color: var(--header-search-input-text-color);

    transition: width 1s;
    &:focus-visible {
      border: 0;
      border-bottom: 2px dashed black;
    }
  }
}
</style>
