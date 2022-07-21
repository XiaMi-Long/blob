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
</style>
