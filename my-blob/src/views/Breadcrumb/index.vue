<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-11 15:56:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:28:02
-->
<template>
  <div class="breadcrumb-container">
    <div class="logo-search">
      <BreadcrumbLogo></BreadcrumbLogo>
      <BreadcrumbInput></BreadcrumbInput>
    </div>
    <div class="page-title">
      <BreadcrumbTitle></BreadcrumbTitle>
      <BreadcrumbIcon></BreadcrumbIcon>
    </div>
  </div>
</template>

<script>
// import { h } from "vue";
import BreadcrumbLogo from "./Logo/index.vue";
import BreadcrumbInput from "./Input/index.vue";
import BreadcrumbTitle from "./Title/index.vue";
import BreadcrumbIcon from "./Icon/index.vue";

export default {
  name: "BreadcrumbView",
  components: {
    BreadcrumbLogo,
    BreadcrumbInput,
    BreadcrumbTitle,
    BreadcrumbIcon,
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
