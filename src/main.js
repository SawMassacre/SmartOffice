import { createApp, reactive } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  create,
  NButton,
  darkTheme,
  lightTheme,
  NSwitch,
  NConfigProvider,
  NThemeEditor,
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NP,
  NIcon,
  NDivider,
  NPageHeader,
  NMenu,
  NProgress,
  NText,
  NCalendar,
  NCard,
  NDataTable,
} from "naive-ui";
import { KinesisContainer, KinesisElement, KinesisAudio } from "vue-kinesis";

import App from "./App.vue";
import HomePage from "./views/HomePage.vue";
import ThemeCreatingPage from "./views/ThemeCreatingPage.vue";

import "./styles/reset.css";
import "./styles/fonts.css";
import "animate.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/themecreatingpage",
      name: "ThemeCreatingPage",
      component: ThemeCreatingPage,
    },
  ],
});

const naive = create({
  components: [
    NButton,
    darkTheme,
    lightTheme,
    NSwitch,
    NConfigProvider,
    NThemeEditor,
    NH1,
    NH2,
    NH3,
    NH4,
    NH5,
    NH6,
    NP,
    NIcon,
    NDivider,
    NPageHeader,
    NMenu,
    KinesisContainer,
    KinesisElement,
    KinesisAudio,
    NProgress,
    NText,
    NCalendar,
    NCard,
    NDataTable,
  ],
});

const themeState = reactive({
  isDark: false,
  theme: lightTheme,
});

createApp(App)
  .use(router)
  .use(naive)
  .provide("themeState", themeState)
  .mount("#app");
