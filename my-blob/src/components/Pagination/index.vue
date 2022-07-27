<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 17:44:57
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-27 22:05:27
-->

<template>
  <div class="pagination-view" :style="{ margin: margin }">
    <n-pagination
      v-model:page="page"
      :page-count="pageSum"
      size="large"
      :on-update:page="emitUpdatePage"
    />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PaginationView",

  props: {
    margin: {
      type: String,
      default: "10px",
      required: false,
    },

    pageNo: {
      type: Number,
      required: true,
    },

    pageSum: {
      type: Number,
      required: true,
    },
  },

  emits: ["update:page", "update-page"],

  setup(props) {
    return {
      page: computed(() => props.pageNo),
    };
  },

  methods: {
    // 传递更新
    emitUpdatePage(value) {
      this.$emit("update-page", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-view {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  display: flex;
  justify-content: center;
}

::v-deep(.n-pagination > *:not(:first-child)) {
  margin: 0 0 0 15px;
}

::v-deep(.n-pagination .n-pagination-item--clickable) {
  background: #1de9b6;

  color: white;

  border: #1de9b6;
}

::v-deep(.n-pagination
    .n-pagination-item:not(.n-pagination-item--disabled).n-pagination-item--active) {
  background: #f4f4f4;
  color: #90a4ae;
  border: #f4f4f4;
}
</style>
