<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <n-card title="Аудио гайд" style="width: fit-content">
      <div class="guide-player">
        <n-button
          strong
          circle
          size="large"
          type="success"
          style="margin-right: 1rem"
          @click="playSong"
        >
          <template #icon>
            <n-icon><PlayCircleOutlineRound /></n-icon>
          </template>
        </n-button>
        <div>
          <n-progress
            type="line"
            :show-indicator="false"
            status="success"
            :percentage="progress"
            :height="5"
            :border-radius="4"
            :fill-border-radius="0"
          />
          <div class="song-name">
            <n-p>{{ songName }}</n-p>
          </div>
        </div>
        <audio ref="audio" :src="mp3Link" @timeupdate="updateProgress" />
      </div>
    </n-card>
  </div>
</template>

<script>
import { PlayCircleOutlineRound } from "@vicons/material";
import { ref } from "vue";

export default {
  components: {
    PlayCircleOutlineRound,
  },
  props: {
    songName: {
      type: String,
      required: true,
    },
    mp3Link: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audio = ref(null);
    const progress = ref(0);

    const playSong = () => {
      audio.value.play();
    };

    const updateProgress = () => {
      progress.value = (audio.value.currentTime / audio.value.duration) * 100;
    };

    return {
      audio,
      progress,
      playSong,
      updateProgress,
    };
  },
};
</script>

<style>
.guide-player {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.song-name {
  margin-right: 1rem;
}
</style>
