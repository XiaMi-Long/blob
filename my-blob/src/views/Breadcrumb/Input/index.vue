<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 17:28:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-11 18:03:20
-->
<template>
  <div></div>
</template>

<script>
import { h } from "vue";
export default {
  name: "BreadcrumbInput",
  setup() {
    return () =>
      h(
        "div",
        {
          class: "input-box",
        },
        [
          h("input", {
            class: "input",
          }),
        ]
      );
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: inline-block;

  width: 70%;

  .input {
    width: 50%;

    background-color: white;

    padding: 0 10px;

    border: 1px solid black;
    border-radius: 10px;

    line-height: 25px;

    outline: none;

    color: #1de9b6;
    &:focus-visible {
      border: 0;
      border-bottom: 2px dashed black;

      border-radius: 0px;
    }
  }
}
</style>
