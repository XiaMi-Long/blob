<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 17:28:00
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 17:25:07
-->
<template>
  <div class="blob-tags-view">
    <div class="content">
      <div class="title">Tags</div>
      <div class="body">
        <div
          class="body-item"
          v-for="(item, index) of filterSelectTags"
          :key="index"
          @click="selectTagsClick(item)"
        >
          {{ item.label }}
          <n-icon size="15">
            <ClearRound></ClearRound>
          </n-icon>
        </div>

        <div
          class="body-item"
          v-for="(item, index) of filterNoSelectTags"
          :key="index"
          @click="tagsClick(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { ClearRound } from "@vicons/material";
export default {
  name: "BlobTagsView",

  components: {
    ClearRound,
  },

  setup() {
    const store = useStore();

    const tagsArray = ref(store.getters.getTagsArray);

    const storedTagsArray = computed(() => store.state.searchParams.tags);

    const filterNoSelectTags = computed(() =>
      tagsArray.value.filter((item) => item.isShow)
    );
    const filterSelectTags = computed(() =>
      tagsArray.value.filter((item) => !item.isShow)
    );
    const filterSelectTagsById = computed(() =>
      filterSelectTags.value.map((item) => item.id)
    );

    tagsArray.value.forEach((item) => {
      item.isShow = true;
    });

    // 检查是否已经有选中的
    if (storedTagsArray.value.length !== 0) {
      tagsArray.value.forEach((item) => {
        if (storedTagsArray.value.includes(item.id)) {
          item.isShow = false;
        }
      });
    }

    // 没有检索到内容时,清空选中状态
    watch(storedTagsArray, (newX) => {
      if (newX.length === 0) {
        tagsArray.value.forEach((item) => {
          item.isShow = true;
        });
      }
    });

    return {
      filterSelectTags,
      filterNoSelectTags,
      filterSelectTagsById,
      tagsArray,
      store,
    };
  },

  methods: {
    tagsClick(item) {
      item.isShow = false;
      this.store.commit("SET_TAGS", this.filterSelectTagsById);
      this.store.commit("SET_HOME_PAGE_OBJECT");
    },

    selectTagsClick(item) {
      item.isShow = true;
      this.store.commit("SET_TAGS", this.filterSelectTagsById);
      this.store.commit("SET_HOME_PAGE_OBJECT");
    },
  },
};
</script>

<style lang="scss" scoped>
.blob-tags-view {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  margin-bottom: $blob-acticle-margin;

  .content {
    box-shadow: $card-shadow;

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

      background-color: var(--home-hot-tags-card-background-color);

      .body-item {
        display: flex;
        align-items: center;

        padding: 10px;

        color: white;

        background-color: var(--home-tags-card-item-background-color);

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
