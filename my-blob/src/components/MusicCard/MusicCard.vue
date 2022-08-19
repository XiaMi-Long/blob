<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-11 21:37:36
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:30:35
-->
<template>
  <div class="music-card-view">
    <Teleport to="body">
      <div
        class="music-card-shadow"
        v-show="isOpenMusicDialog"
        @click="setIsOpenMusicDialogValue"
      >
        <Transition name="modal">
          <div class="music-card" @click.stop>
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { inject } from "vue";

const { isOpenMusicDialog, setIsOpenMusicDialogValue } =
  inject("isOpenMusicDialog");
</script>

<style lang="scss" scoped></style>

<style>
.music-card-shadow {
  position: fixed;

  z-index: 2002;

  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 69%);

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
}
.music-card {
  width: 800px;
  height: 650px;

  color: white;

  margin: 0 auto;

  border: 1px solid var(--n-border-color);

  box-shadow: 0 20px 68px rgb(0 0 0 / 55%);
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
