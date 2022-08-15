<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-13 16:19:08
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-15 20:33:33
-->
<template>
  <div class="blob-song-box">
    <div class="content">
      <div class="title">Song</div>
      <n-scrollbar style="max-height: 330px">
        <div class="body">
          <ul class="body-ul">
            <li
              class="body-item"
              v-for="(item, index) of songArray"
              :key="index"
              @click="handleSongNameClick(item.songId)"
            >
              <n-ellipsis>
                {{ item.songName + " - " + item.songAuthor }}
              </n-ellipsis>
              <n-icon size="25" v-if="currentPlaySongId === item.songId">
                <MusicNoteRound></MusicNoteRound>
              </n-icon>
            </li>
          </ul>
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { MusicNoteRound } from "@vicons/material";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();

const songArray = ref(store.getters.getSongArray);
const currentPlaySongId = computed(() => store.state.currentPlaySongId);

function handleSongNameClick(id) {
  store.commit("SET_CURRENT_PLAY_SONG_ID", id);
}
</script>

<style lang="scss" scoped>
.blob-song-box {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  .content {
    box-shadow: $card-shadow;

    max-height: 420px;

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

      background-color: var(--home-hot-tags-card-background-color);

      &-ul {
        padding: 0px;
      }

      &-item {
        text-align: left;

        margin: 10px 0;

        padding: 10px;

        color: #1de9b6;

        list-style-type: none;

        cursor: pointer;

        display: flex;
        justify-content: space-between;

        transition: transform 0.7s, font-style 0.7s;

        &:hover {
          transform: translateX(10px);

          border-bottom: 1px solid #1de9b6;

          font-style: italic;
        }
      }
    }
  }
}
</style>
