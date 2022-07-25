<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 10:58:19
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-25 22:05:01
-->
<template>
  <div class="blob-activle-text-box">
    <!-- 卡片内容 -->
    <n-card v-for="(item, index) of activleArray" :key="index">
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
          <n-ellipsis class="tag-time"> {{ item.activleTime }} </n-ellipsis>
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
          <n-avatar lazy round size="large" :src="item.activleUserPhoto" />
          HomeLeader
        </n-space>
      </div>
    </n-card>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "BlobActivleTextView",

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  setup(prop) {
    // 为所有图片添加加载异常处理
    const handleImgLoadError = () => {
      const imgs = document.querySelectorAll("img");
      imgs.forEach((item) => {
        item.addEventListener("error", function () {
          this.src = "img/activle-images/404.jpg";
        });
      });
    };

    onMounted(() => handleImgLoadError());

    return { activleArray: prop.data };
  },

  methods: {
    /* 处理查看更多 */
    handleSeeMoreClick(id) {
      this.$router.push(`/article/${id}`);
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
