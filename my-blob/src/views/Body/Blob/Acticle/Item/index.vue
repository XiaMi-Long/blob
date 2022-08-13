<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 10:58:19
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-11 20:41:00
-->
<template>
  <div class="blob-activle-text-box">
    <!-- 卡片内容 -->
    <n-card v-for="(item, index) of data" :key="index">
      <template #cover>
        <img
          :src="item.activlePhoto"
          title="文章图片"
          lazy
          class="active-photo"
        />
      </template>
      <!-- 文章标题 -->
      <div
        class="title-box"
        title="文章标题"
        @click="handleSeeMoreClick(item.activleId)"
      >
        <n-ellipsis>
          <span class="title">{{ item.activleTitle }}</span>
        </n-ellipsis>
      </div>
      <!-- 文章标签和时间 -->
      <div class="time-tag-box">
        <div class="time" title="时间">
          <n-ellipsis class="tag-time"
            ><n-time :time="item.activleTime" format="yyyy-MM-dd" />
          </n-ellipsis>
        </div>
        <div class="tag" title="文章标签">
          <n-radio :checked="true"> </n-radio>
          <n-ellipsis class="tag-text"> {{ item.activleTag }} </n-ellipsis>
        </div>
      </div>
      <!-- 文章简介 -->
      <div class="body-text" @click="handleSeeMoreClick(item.activleId)">
        <n-ellipsis :line-clamp="3" :tooltip="false">
          {{ item.activleBody }}
        </n-ellipsis>
      </div>
      <!-- 查看更多 -->
      <div class="select-more">
        <p>
          <router-link
            to="#"
            title="查看更多"
            @click="handleSeeMoreClick(item.activleId)"
            >See More</router-link
          >
        </p>
      </div>
      <!-- 作者头像 -->
      <div class="avatar">
        <n-space>
          <n-avatar
            lazy
            round
            size="large"
            alt="头像"
            :src="item.activleUserPhoto"
          />
          {{ item.activleAuthor }}
        </n-space>
      </div>
    </n-card>

    <!-- 没有搜索到内容时展示 -->
    <n-card class="empty-card" v-if="isShowEmpty">
      <div class="empty-text">
        <p>
          对于命途多舛的人生，以及渺茫的时间，阻挡在我们之间这一事实，我们无可奈何。
        </p>
        <p>
          时间并没有放慢脚步，季节不停地在变化，而你我之间的距离也越来越远。
        </p>
        <p>
          我们之间即使互通了一千多条短信，彼此间心的距离也仅仅靠近了一厘米。
        </p>
        <p>昨晚，梦到了以前的事，梦里的我和他还是孩子。</p>
        <p>只是过着生活，但令人悲伤的事到处积累着。</p>
        <p>-------------------《秒速五厘米》</p>
      </div>
      <!-- 空内容 -->
      <n-empty description="你找到以前了吗？" size="huge">
        <template #icon></template>
        <template #extra>
          <n-button size="small" @click="backSearchClick">
            回到最初的地方
          </n-button>
        </template>
      </n-empty>
    </n-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  name: "BlobActivleTextView",

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    // 为所有图片添加加载异常处理
    const handleImgLoadError = () => {
      const imgs = document.querySelectorAll("img");
      imgs.forEach((item) => {
        item.addEventListener("error", function () {
          this.src = "img/activle-images/404.jpg";
        });
      });
    };

    // 判断数据条数是否为0
    const isShowEmpty = computed(() => props.data.length === 0);

    onMounted(() => handleImgLoadError());

    return { store, isShowEmpty };
  },

  methods: {
    /* 处理查看更多 */
    handleSeeMoreClick(id) {
      this.$router.push(`/article/${id}`);
    },

    /* 回到最初的地方 */
    backSearchClick() {
      this.store.commit("SET_TAGS", []);
      this.store.commit("SET_INPUT_VALUE", "");
      this.store.commit("SET_HOME_PAGE_OBJECT");
    },
  },
};
</script>

<style lang="scss" scoped>
.blob-activle-text-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .active-photo {
    height: 180px;

    transition: transform 0.5s;
    &:hover {
      transform: scale(1.4);
    }
  }
  .title-box {
    text-align: left;

    margin: 5px 0 20px 0;

    cursor: pointer;
    .title {
      font-size: 1.5em;
      font-weight: bold;
    }
  }

  .time-tag-box {
    display: flex;
    align-items: center;

    font-size: 12px;

    color: #90a4ae;
    .time {
      width: 50%;
      text-align: left;
    }

    .tag {
      width: 50%;
      text-align: right;
    }
  }

  .body-text {
    min-height: 72px;

    margin: 20px 0;

    color: #90a4ae;

    word-break: break-all;

    text-align: left;

    cursor: pointer;
  }

  .select-more {
    text-align: right;

    a {
      color: #1de9b6;
      text-decoration: none;
    }
  }

  .avatar {
    .n-space {
      align-items: center;

      font-weight: bold;
    }
  }

  .empty-card {
    width: 100%;
    height: 600px;

    .empty-text {
      text-align: left;
    }
  }
}

::v-deep(.tag-text) {
  max-width: 80%;

  color: black;

  font-size: 14px;

  text-indent: 1em;

  color: var(--n-color-target);
}

::v-deep(.tag-time) {
  max-width: 100%;
}

.n-card {
  width: 47%;

  display: inline-block;

  margin-bottom: $blob-acticle-margin;

  box-shadow: $card-shadow;
}

@media screen and (min-width: 1700px) {
  .blob-activle-text-box {
    .active-photo {
      height: 350px;
    }
  }
}

@media screen and (max-width: 1700px) {
  .blob-activle-text-box {
    .active-photo {
      height: 250px;
    }
  }
}

@media screen and (max-width: 1000px) {
  ::v-deep(.tag-text) {
    max-width: 50%;

    font-size: 14px;
  }
  ::v-deep(.tag-time) {
    max-width: 90%;

    font-size: 14px;
  }

  .n-card {
    width: 100%;
  }

  .blob-activle-text-box {
    .active-photo {
      height: 450px;
    }
  }
}

@media screen and (max-width: 600px) {
  .blob-activle-text-box {
    .active-photo {
      height: 250px;
    }
  }
}
</style>
