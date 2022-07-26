<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 10:02:51
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 21:13:27
-->
<template>
  <div class="blob-activle-box">
    <BlobActivleTextView :data="activleArray"></BlobActivleTextView>
  </div>
</template>

<script>
import BlobActivleTextView from "./Item/index.vue";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "BlobActivleView",
  components: {
    BlobActivleTextView,
  },
  setup() {
    const store = useStore();

    return { activleArray: computed(() => store.getters.getShowActivleArray) };
  },
};
</script>

<style lang="scss" scoped>
.blob-activle-box {
  padding: 0 calc($view-padding / 2) 0 $view-padding;
}
/* 高度小于1100, 分配左右边距 */
@media screen and (max-width: 1100px) {
  .blob-activle-box {
    padding: 0 $view-padding;
  }
}
</style>
