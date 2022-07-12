<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-12 10:58:19
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-12 16:48:08
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
      <div class="title-box" title="文章标题">
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
      <div class="body-text">
        <n-ellipsis :line-clamp="3" :tooltip="false">
          {{ item.activleBody }}
        </n-ellipsis>
      </div>
      <!-- 查看更多 -->
      <div class="select-more">
        <p>
          <router-link to="#" title="查看更多">See More</router-link>
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
export default {
  name: "BlobActivleTextView",
  setup() {
    const activleArray = [
      {
        activlePhoto: require("@/assets/images/1.jpg"),
        activleTitle: "Title Goes Hear",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        explicabo quis illo possimus aspernatur iusto, praesentium dolores,`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
      {
        activlePhoto: require("@/assets/images/2.png"),
        activleTitle: "JavaScript is a programming language",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with JavaScript and furthers your understanding of what is possible`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
      {
        activlePhoto: require("@/assets/images/3.jpg"),
        activleTitle: "日期选择器",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `日期选择器作为基础组件重要不可或缺的一员，大家已经快习惯它一成不变的样子，输入框+日期选择弹出层。但到业务中，这种墨守成规的样子真的能百分百契合业务需求吗。这篇文章从多个网站的日期选择场景出发，企图归纳出日期选择器的最佳实践。这篇文章对移动端的日期选择暂无涉猎，都是 PC 端，列举出通用场景，每个类型日期选择器需要考虑的设计。 文章链接：Designing The Perfect Date And Time Picker 感谢本期评论官 @黄子毅 @流形 @王亮 @赵阳 @不知名的花瓣工程师`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
      {
        activlePhoto: require("@/assets/images/4.jpg"),
        activleTitle:
          "国内目前处于 BI 1.0 阶段，也就是报表阶段，因此笔者将阐述这个阶段 BI 的核心开发概念",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `数据集即数据的集合，在 BI 领域更多指一种标准化的数据结构。
        任何数据都可以封装成数据集，比如 txt 文本、excel、mysql 数据库等等。
        数据集的基本形态是二维表格，列头表示字段，每一行就是一份数据，数据展示就是通过对这些数据字段进行多维度分析`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
      {
        activlePhoto: require("@/assets/images/5.jpg"),
        activleTitle:
          "javascript 的 this 是个头痛的话题，本期精读的文章更是引出了一个观点，避免使用 this。我们来看看是否有道理",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `初学者可能突然将 this 弄丢导致程序出错，甚至在 react 中也要使用 bind 的方式，使回调可以访问到 setState 等函数。
        this 也不利于测试，如果使用纯函数，可以通过入参出参做测试，而不需要预先初始化环境。`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
      {
        activlePhoto: require("@/assets/images/6.jpg"),
        activleTitle:
          "尤雨溪 在 2019 JSConf 的分享 Seeking the Balance in Framework Design 十分精彩，道出了如何进行合理的前端框架设计与框架选型",
        activleTime: "2022年7月12日13:54:00",
        activleTag: "JavaScript",
        activleBody: `服务范围是个比较难翻译的单词，在原 PPT 中用了 “Scope” 这个单词表示，可以理解为 “作用域、框架的承诺功能范围、服务配套齐全程度”。比如提供的是一个工具库还是整体框架，插件管理是集中式还是依赖生态。
        React 是典型的小服务范围框架，核心包只实现了基本功能，而其他生态基本靠社区拓展；Angular 是典型大服务范围框架，官方对所有业务场景都做了最佳实践能力覆盖；Vue 处在中间区域，通过功能分层，既拥有小服务范围的能力，又可以搭配官方插件实现更多场景化能力`,
        activleUserPhoto: require("@/assets/images/p.jpg"),
      },
    ];
    return { activleArray };
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
  }
  .title-box {
    text-align: left;

    margin: 5px 0 20px 0;
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

  margin-bottom: 20px;

  box-shadow: $card-shadow;
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
