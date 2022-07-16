<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-13 20:09:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-16 21:12:10
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
  <div class="article">
    <ArticleOptionView></ArticleOptionView>
    <ArticleBodyView></ArticleBodyView>
  </div>
</template>

<script>
import ArticleOptionView from "./Option/index.vue";
import ArticleBodyView from "./Body/index.vue";

export default {
  name: "ArticleView",

  components: {
    ArticleOptionView,
    ArticleBodyView,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
