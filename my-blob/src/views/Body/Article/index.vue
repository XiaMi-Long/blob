<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-13 20:09:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-13 22:14:58
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-13 20:09:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-13 20:10:31
-->
<template>
  <div>
    <ArticleBodyView></ArticleBodyView>
  </div>
</template>

<script>
import ArticleBodyView from "./Body/index.vue";
export default {
  name: "ArticleView",

  components: {
    ArticleBodyView,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
