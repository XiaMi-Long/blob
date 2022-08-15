<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 16:54:07
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-13 16:43:04
-->
<template>
  <div class="blob-archives-box">
    <div class="content">
      <div class="title">Hot</div>
      <div class="body">
        <ul class="body-ul">
          <li
            class="body-item"
            v-for="(item, index) of hots"
            :key="index"
            @click="handleBlobTitleClick(item.activleId)"
          >
            <n-ellipsis>
              {{ item.activleTitle }}
            </n-ellipsis>
            <!-- <div class="sum">{{ index + 1 }}</div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlobHotView",

  props: {
    hots: {
      type: Array,
      required: true,
    },
  },

  emits: ["title-click"],

  setup() {
    return {};
  },

  methods: {
    handleBlobTitleClick(id) {
      this.$emit("title-click", id);
    },
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

      background-color: var(--home-hot-tags-card-background-color);

      &-ul {
        padding: 0px;
      }

      &-item {
        text-align: left;

        margin: 10px 0;

        padding: 10px;

        color: #1de9b6;

        list-style-type: none;

        cursor: pointer;

        display: flex;
        justify-content: space-between;

        transition: transform 0.7s, font-style 0.7s;

        &:hover {
          transform: translateX(10px);

          border-bottom: 1px solid #1de9b6;

          font-style: italic;
        }
        .sum {
          color: #90a4c0;
        }
      }
    }
  }
}
</style>
