import { createApp, reactive } from "vue";
import {
  create,
  NButton,
  darkTheme,
  lightTheme,
  NSwitch,
  NConfigProvider,
} from "naive-ui";

import App from "./App.vue";

const naive = create({
  components: [NButton, darkTheme, lightTheme, NSwitch, NConfigProvider],
});

const themeState = reactive({
  isDark: false,
  theme: lightTheme,
});

const app = createApp(App);
app.provide("themeState", themeState);
app.use(naive).mount("#app");
