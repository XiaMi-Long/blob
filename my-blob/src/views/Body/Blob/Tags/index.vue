<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 17:28:00
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 17:41:55
-->
<template>
  <div class="blob-tags-view">
    <div class="content">
      <div class="title">Tags</div>
      <div class="body">
        <div class="body-item" v-for="(item, index) of tagsArray" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlobTagsView",
  setup() {
    const tagsArray = [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "JAVA",
      "PHP",
      "C",
      "C#",
      "C++",
      "WINDOW",
    ];
    return { tagsArray };
  },
};
</script>

<style lang="scss" scoped>
.blob-tags-view {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  margin-bottom: $blob-acticle-margin;

  .content {
    box-shadow: $card-shadow;

    min-height: 250px;

    background-color: white;

    .title {
      padding: 20px;

      height: 15%;

      color: white;

      background-color: #1de9b6;

      text-align: left;
    }

    .body {
      padding: 15px 10px;

      display: flex;
      flex-wrap: wrap;

      .body-item {
        padding: 10px;

        color: white;

        background-color: #cfd8dc;

        border-radius: 4px;

        margin: 5px 10px;

        cursor: pointer;

        line-height: 1;

        transition: background-color 0.5s, transform 0.5s;
        &:hover {
          background-color: #1de9b6;

          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
