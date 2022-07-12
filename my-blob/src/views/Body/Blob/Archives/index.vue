<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 16:54:07
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 17:22:21
-->
<template>
  <div class="blob-archives-box">
    <div class="content">
      <div class="title">Archives</div>
      <div class="body">
        <li class="body-item" v-for="(item, index) of 6" :key="index">
          {{ Number(`201${index}`) + 1 }}
          <div class="sum">{{ index + 1 }}</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlobArchivesView",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.blob-archives-box {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  margin-bottom: $blob-acticle-margin;
  .content {
    box-shadow: $card-shadow;

    min-height: 400px;

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

      &-item {
        text-align: left;

        margin: 10px 0;

        padding: 10px;

        color: #1de9b6;

        list-style-type: none;

        cursor: pointer;

        display: flex;
        justify-content: space-between;

        transition: padding-left 0.7s;
        &:hover {
          padding-left: 45px;

          border-bottom: 1px solid #1de9b6;
        }
        .sum {
          color: #90a4c0;
        }
      }
    }
  }
}
</style>
