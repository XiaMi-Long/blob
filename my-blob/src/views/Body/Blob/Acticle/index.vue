<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 10:02:51
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 16:47:53
-->
<template>
  <div class="blob-activle-box">
    <BlobActivleTextView></BlobActivleTextView>
  </div>
</template>

<script>
import BlobActivleTextView from "./Item/index.vue";

export default {
  name: "BlobActivleView",
  components: {
    BlobActivleTextView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.blob-activle-box {
  padding: 0 calc($view-padding / 2) 0 $view-padding;
}
</style>
