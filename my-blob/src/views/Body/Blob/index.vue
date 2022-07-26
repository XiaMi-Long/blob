<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 16:04:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 20:46:21
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
        <BlobTagsView></BlobTagsView>
      </n-gi>
    </n-grid>
    <n-grid x-gap="0" :cols="24">
      <n-gi :span="24" class="blob-pagination-view">
        <PaginationView
          margin="100px 0 70px 0 "
          :pageNo="pageNo"
          :pageTotal="pageTotal"
          @update-page="handlePaginationUpdatePage"
        ></PaginationView>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import BlobTitleView from "./Title/index.vue";
import BlobActivleView from "./Acticle/index.vue";
import BlobCalendarView from "./Calendar/index.vue";
import BlobArchivesView from "./Archives/index.vue";
import BlobTagsView from "./Tags/index.vue";
import PaginationView from "@/components/Pagination/index.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BlobHomeView",
  components: {
    BlobTitleView,
    BlobActivleView,
    BlobCalendarView,
    BlobArchivesView,
    BlobTagsView,
    PaginationView,
  },

  setup() {
    const store = useStore();

    let calendarValue = ref(new Date());

    return {
      store,
      calendarValue,
      pageNo: computed(() => store.getters.getHomePageNo),
      pageTotal: computed(() => store.getters.getHomePageTotal),
    };
  },

  methods: {
    // 处理分页页码更新
    handlePaginationUpdatePage(page) {
      this.store.commit("SET_ACTIVLE_PAGE_NO", page);
      this.store.commit("SET_HOME_PAGE_OBJECT");
    },
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
