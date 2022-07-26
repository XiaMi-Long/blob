<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 15:56:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-26 21:27:11
-->
<template>
  <div class="breadcrumb-container">
    <div class="logo-search">
      <Logo></Logo>
      <Input></Input>
    </div>
    <div class="page-title">
      <Title></Title>
      <Icon></Icon>
    </div>
  </div>
</template>

<script>
// import { h } from "vue";
import Logo from "./Logo/index.vue";
import Input from "./Input/index.vue";
import Title from "./Title/index.vue";
import Icon from "./Icon/index.vue";

export default {
  name: "BreadcrumbView",
  components: {
    Logo,
    Input,
    Title,
    Icon,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  width: 100%;

  display: flex;

  box-shadow: 0px -1px 4px 0px black;

  min-height: 60px;

  padding: 0 $view-padding;

  .logo-search {
    width: 50%;

    display: flex;
    align-items: center;
  }

  .page-title {
    width: 50%;

    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 1300px) {
  .breadcrumb-container {
    .logo-search {
      width: 45%;
    }
  }
}
@media screen and (max-width: 800px) {
  .breadcrumb-container {
    .logo-search {
      width: 30%;
    }

    .page-title {
      width: 60%;
    }
  }
}

@media screen and (max-width: 600px) {
  .breadcrumb-container {
    .logo-search {
      width: 10%;
    }

    .page-title {
      width: 90%;
    }
  }
}
</style>
