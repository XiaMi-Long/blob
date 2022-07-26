<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 09:37:50
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 21:39:36
-->
<template>
  <div class="blob-title-box fixed-header-margin">
    <n-space vertical>
      <h2 class="title">Article</h2>
    </n-space>
  </div>
</template>

<script>
export default {
  name: "BlobTitleView",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.blob-title-box {
  text-align: left;

  padding: 0 $view-padding;

  .title {
    margin: 40px 0;

    width: 0%;

    transition: width 0.5s;

    cursor: pointer;

    border-bottom: 2px solid #1de9b6;

    &:hover {
      width: 60%;

      color: #1de9b6;
    }
  }
}
</style>
