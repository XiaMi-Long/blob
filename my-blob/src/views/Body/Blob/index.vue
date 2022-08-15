<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 16:04:17
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-13 18:11:25
-->
<template>
  <div>
    <BlobTitleView></BlobTitleView>
    <n-grid x-gap="0" :cols="24">
      <n-gi :span="16" class="blob-activle-view">
        <BlobActivleView></BlobActivleView>
      </n-gi>
      <n-gi :span="8" class="blob-calendar-view">
        <BlobHotView
          :hots="hotsBlob"
          @title-click="handleBlobTitleClick"
        ></BlobHotView>
        <BlobTagsView></BlobTagsView>
        <BlobSongView v-if="isHaveSong && isPc"></BlobSongView>
      </n-gi>
    </n-grid>
    <n-grid x-gap="0" :cols="24">
      <n-gi :span="24" class="blob-pagination-view">
        <PaginationView
          margin="100px 0 70px 0 "
          :pageNo="pageNo"
          :pageSum="pageSum"
          @update-page="handlePaginationUpdatePage"
        ></PaginationView>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import BlobSongView from "./Song/BlobSongView.vue";
import BlobTitleView from "./Title/index.vue";
import BlobActivleView from "./Acticle/index.vue";
import BlobHotView from "./Hot/index.vue";
import BlobTagsView from "./Tags/index.vue";
import PaginationView from "@/components/Pagination/index.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BlobHomeView",
  components: {
    BlobSongView,
    BlobTitleView,
    BlobActivleView,
    BlobHotView,
    BlobTagsView,
    PaginationView,
  },

  setup() {
    const store = useStore();

    const songArray = store.getters.getSongArray;

    return {
      store,
      isHaveSong: computed(() => songArray.length > 0),
      isPc: computed(() => store.state.isPc),
      hotsBlob: computed(() => store.getters.getHotBlob),
      pageNo: computed(() => store.getters.getHomePageNo),
      pageSum: computed(() => store.getters.getHomePageSum),
    };
  },

  methods: {
    // 处理分页页码更新
    handlePaginationUpdatePage(page) {
      this.store.commit("SET_ACTIVLE_PAGE_NO", page);
      this.store.commit("SET_HOME_PAGE_OBJECT");
    },

    // 处理hot标题被点击
    handleBlobTitleClick(id) {
      console.log(id);
      this.$router.push(`/article/${id}`);
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
