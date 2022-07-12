<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 16:04:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 16:55:29
-->
<template>
  <div>
    <BlobTitleView></BlobTitleView>
    <n-grid x-gap="0" :cols="24">
      <n-gi :span="16" class="blob-activle-view">
        <BlobActivleView></BlobActivleView>
      </n-gi>
      <n-gi :span="8" class="blob-calendar-view">
        <BlobCalendarView :timeValue="calendarValue"></BlobCalendarView>
        <BlobArchivesView></BlobArchivesView>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import BlobTitleView from "./Title/index.vue";
import BlobActivleView from "./Acticle/index.vue";
import BlobCalendarView from "./Calendar/index.vue";
import BlobArchivesView from "./Archives/index.vue";
import { ref } from "vue";

export default {
  name: "BlobHomeView",
  components: {
    BlobTitleView,
    BlobActivleView,
    BlobCalendarView,
    BlobArchivesView,
  },

  setup() {
    let calendarValue = ref(new Date());

    return {
      calendarValue,
    };
  },
};
</script>

<style lang="scss" scoped>
/* 高度小于1100, 隐藏日历 */
@media screen and (max-width: 1100px) {
  .blob-activle-view {
    grid-column: span 24 / span 24 !important;
  }
  .blob-calendar-view {
    display: none;
  }
}
</style>
