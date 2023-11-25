<template>
  <div class="view-container">
    <guide-player-component
      songName="Добро пожаловать на главную"
      :mp3Link="require('../assets/audio/JamesHome.mp3')"
    ></guide-player-component>
    <n-h1>Ваши задачи на сегодня</n-h1>
    <tasks-table-component></tasks-table-component>
    <n-h1>Ваш календарь</n-h1>
    <calendar-component></calendar-component>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GuidePlayerComponent from "../components/GuidePlayerComponent.vue";
import CalendarComponent from "../components/CalendarComponent.vue";
import TasksTableComponent from "../components/TasksTableComponent.vue";

export default defineComponent({
  components: {
    GuidePlayerComponent,
    CalendarComponent,
    TasksTableComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.view-container {
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 2rem;
}
</style>
