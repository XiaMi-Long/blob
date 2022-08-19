<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-11 21:39:25
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:34:27
-->
<template>
  <div class="music-view">
    <MusicCardView>
      <div
        class="audio-play"
        :style="{
          'background-image': `url(${audioPlayBackgroundImage})`,
        }"
      >
        <div
          class="function-bar"
          :style="{ 'background-color': functionBarBackground }"
        >
          <div class="progress-box">
            <div class="load-progress" id="bottom-loading"></div>
            <div class="load-progress" id="top-loading"></div>
            <div class="" id="loading-icon"></div>
          </div>
          <div class="button-box">
            <div class="start-time">{{ audioCurrentTime }}</div>
            <div class="control-song">
              <span>
                <n-icon size="30">
                  <Add24Regular
                    class="icon"
                    id="music-volume-add"
                  ></Add24Regular>
                </n-icon>
              </span>
              <span v-show="!isPlaying">
                <n-icon size="30">
                  <Play28Regular id="music-play" class="icon"></Play28Regular>
                </n-icon>
              </span>
              <span v-show="isPlaying">
                <n-icon size="30">
                  <Pause16Regular id="music-stop" class="icon">
                  </Pause16Regular>
                </n-icon>
              </span>
              <span>
                <n-icon size="30">
                  <RemoveSharp
                    class="icon"
                    id="music-volume-remove"
                  ></RemoveSharp>
                </n-icon>
              </span>
              <span>
                <n-icon size="30">
                  <VolumeLowOutline></VolumeLowOutline>
                </n-icon>
              </span>
              <span>{{ audioVolume }}</span>
            </div>
            <div class="end-time">{{ audioDuration }}</div>
          </div>
        </div>
        <audio id="audioPlayer" :src="audioSrc">
          <!-- <source src="source/One more time.mp3" type="audio/mp3"> -->
          <!-- <source src="@/assets/source/mp3/callme.mp3" type="audio/mp3" /> -->
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    </MusicCardView>
  </div>
</template>

<script setup>
import MusicCardView from "@/components/MusicCard/MusicCard.vue";
import { Add24Regular, Play28Regular, Pause16Regular } from "@vicons/fluent";
import { RemoveSharp } from "@vicons/material";
import { VolumeLowOutline } from "@vicons/ionicons5";

import { useStore } from "vuex";
import { ref, onMounted, inject, watch, nextTick } from "vue";
import { useMessage } from "naive-ui";

const { isOpenMusicDialog } = inject("isOpenMusicDialog");

const store = useStore();
const message = useMessage();

let audioSrc = ref("");
let audio = null;
let bottomLoad = null;
let topLoad = null;
let loadIcon = null;
let positionRelative = null;
let isPlaying = ref(false);
let functionBarBackground = ref("");
let audioPlayBackgroundImage = ref("");
let audioVolume = ref(0);
let audioCurrentTime = ref("0:00");
let audioDuration = ref("0:00");

//初始化默认歌曲url
const songArray = store.getters.getSongArray;
audioSrc.value = songArray[0].songUrl;
functionBarBackground.value = songArray[0].songThemeColor;
audioPlayBackgroundImage.value = songArray[0].songImageUrl;

// 更新vuex全局正在播放的歌曲id
store.commit("SET_CURRENT_PLAY_SONG_ID", songArray[0].songId);

watch(isOpenMusicDialog, async (newValue) => {
  // 在页面重新展示的时候,重新获取dom的getBoundingClientRect
  if (newValue) {
    await nextTick();
    positionRelative = bottomLoad.getBoundingClientRect();
  }
});

watch(
  () => store.state.currentPlaySongId,
  async (newValue) => {
    const songInfo = filterSongId(newValue);
    audioPlayBackgroundImage.value = songInfo[0].songImageUrl;
    functionBarBackground.value = songInfo[0].songThemeColor;
    audioSrc.value = songInfo[0].songUrl;

    // 重置播放图标
    isPlaying.value = true;

    await nextTick();
    // 歌曲播放
    audio.play();
  }
);

onMounted(() => {
  audio = document.getElementById("audioPlayer");
  bottomLoad = document.getElementById("bottom-loading");
  topLoad = document.getElementById("top-loading");
  loadIcon = document.getElementById("loading-icon");
  positionRelative = bottomLoad.getBoundingClientRect();
  init();
});

function init() {
  // 歌曲播放事件
  audio.addEventListener("play", function () {
    isPlaying.value = true;
  });

  // 歌曲暂停事件
  audio.addEventListener("pause", function () {
    isPlaying.value = false;
  });

  // 初始化歌曲长度
  audio.addEventListener("durationchange", function () {
    initMusicDuration();
    initProgressIconEvent();
  });

  // currentTime属性值发生变化的时候会触发
  audio.addEventListener("timeupdate", function () {
    updateMusicCurrentTime();
    updateMusicProgress();
  });

  initAudioConfig();
  initPlayerMusicEvent();
  initStopMusicEvent();
  initMusicVolumeEvent();
}

// 初始化音频音量大小和播放倍率
function initAudioConfig() {
  audio.volume = 0.5;
  audio.playbackRate = 1;

  audioVolume.value = audio.volume * 100;
}

// 初始化歌曲总长度
function initMusicDuration() {
  if (Number.isNaN(audio.duration)) {
    message.error("歌曲加载失败，请检查网络");
  }

  audioDuration.value = formatTime(audio.duration);
}

// 初始化播放音乐事件
function initPlayerMusicEvent() {
  const playerIcon = document.getElementById("music-play");
  playerIcon.addEventListener("click", function () {
    audio.play();
  });
}

//初始化暂停音乐事件
function initStopMusicEvent() {
  const stopIcon = document.getElementById("music-stop");
  stopIcon.addEventListener("click", function () {
    audio.pause();
  });
}

// 初始化音量事件
function initMusicVolumeEvent() {
  const add = document.getElementById("music-volume-add");
  const remove = document.getElementById("music-volume-remove");

  add.addEventListener("click", function () {
    if (audioVolume.value === 100) {
      return;
    }
    audioVolume.value = audioVolume.value + 10;
    audio.volume = audio.volume + 0.1;
  });

  remove.addEventListener("click", function () {
    if (audioVolume.value === 0) {
      return;
    }
    audioVolume.value = audioVolume.value - 10;
    audio.volume = audio.volume - 0.1;
  });
}

// 更新当前歌曲进度
function updateMusicCurrentTime() {
  audioCurrentTime.value = formatTime(audio.currentTime);
}

// 更新进度条
function updateMusicProgress() {
  const max = audio.duration;
  const currentTime = audio.currentTime;
  const result = parseInt((currentTime / max) * 100, 10) + "%";
  topLoad.style.left = result;
  loadIcon.style.left = result;
}

// 初始化进度条点击跳转播放进度事件
function initProgressIconEvent() {
  bottomLoad.addEventListener("click", computePositionTime);
  topLoad.addEventListener("click", computePositionTime);
}

// 格式化双精度时间
function formatTime(time) {
  const frontTime = parseInt(time / 60, 10);
  let backTime = parseInt(time % 60, 10) / 100;
  backTime = String(backTime.toFixed(2)).slice(2);
  return frontTime + ":" + backTime;
}

// 计算点击的位置时间,更新进度
function computePositionTime(event) {
  const maxWidth = positionRelative.width;
  // 点击的位置要减去元素最左边离屏幕的距离才是这个元素的真实距离
  const clickWidth = event.x - positionRelative.x;
  const progressClickTime = (clickWidth / maxWidth).toFixed(2);
  audio.currentTime = parseInt(audio.duration * progressClickTime, 10);
}

// 返回选定歌曲id的歌曲信息对象
function filterSongId(id) {
  return songArray.filter((item) => item.songId === id);
}
</script>

<style lang="scss" scoped>
.audio-play {
  width: 100%;
  height: 100%;

  box-shadow: 0 0 12px black;

  background-size: 100% 100%;

  audio {
    display: none;
  }

  .function-bar {
    height: 20%;

    position: relative;
    top: 80%;
    opacity: 0.8;

    padding: 0 20px;

    .progress-box {
      height: 30%;

      position: relative;

      overflow: hidden;

      display: flex;
      align-items: center;

      .load-progress {
        border-radius: 20px;

        height: 5px;

        position: absolute;
      }

      #bottom-loading {
        width: 100%;

        background-color: white;

        z-index: 1;

        cursor: pointer;
      }

      #top-loading {
        width: 100%;

        transform: translateX(-100%);

        transition: left 0.5s;

        background-color: #f3bb00;

        z-index: 2;

        cursor: pointer;
      }

      #loading-icon {
        background-color: #f3bb00;

        width: 10px;
        height: 10px;

        position: relative;

        transition: left 0.5s;

        border-radius: 50%;

        z-index: 3;

        cursor: pointer;
      }
    }
    .button-box {
      height: 70%;

      display: flex;

      color: white;
      font-size: 21px;

      .start-time {
        width: 30%;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .control-song {
        width: 40%;

        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
          margin: 0 20px;
        }

        .icon {
          cursor: pointer;
        }

        #music-volume-text {
          min-height: 38px;
        }
      }

      .end-time {
        width: 30%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
