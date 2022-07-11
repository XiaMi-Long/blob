<template>
  <div class="breadcrumb-container">
    <div class="logo-search">
      <Logo></Logo>
      <Input></Input>
    </div>
  </div>
</template>

<script>
// import { h } from "vue";
import Logo from "./Logo/index.vue";
import Input from "./Input/index.vue";

export default {
  name: "BreadcrumbView",
  components: {
    Logo,
    Input,
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
    width: 60%;

    display: flex;
    align-items: center;
  }
}
</style>
