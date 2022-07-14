<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 17:44:57
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 18:06:08
-->
<template>
  <div class="pagination-view" :style="{ margin: margin }">
    <n-pagination v-model:page="page" :page-count="10" size="large" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PaginationView",

  props: {
    margin: {
      type: String,
      default: "10px",
      required: false,
    },
  },
  setup() {
    let page = ref(1);
    return {
      page,
    };
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
