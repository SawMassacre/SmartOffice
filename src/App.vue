<template>
  <div id="app">
    <n-switch v-model:value="isDark" />
    <n-config-provider
      :theme="theme"
      :theme-overrides="
        theme === 'dark' ? darkThemeOverrides : lightThemeOverrides
      "
    >
    </n-config-provider>
    <router-view />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { NConfigProvider } from "naive-ui";

import "./styles/reset.css";
import "./styles/style.css";

export default {
  name: "App",
  components: {
    NConfigProvider,
  },
  setup() {
    const isDark = ref(true);
    const theme = computed(() => (isDark.value ? "dark" : "light"));

    /**
     * @type import('naive-ui').GlobalThemeOverrides
     */

    const lightThemeOverrides = {
      common: {
        primaryColor: "#18a058",
        successColor: "#26CD58FF",
        errorColor: "#EA1F49FF",
        errorColorHover: "#F55F7EFF",
        errorColorSuppl: "#F55F7EFF",
        errorColorPressed: "#C51345FF",
        warningColorPressed: "#E04A17FF",
        warningColor: "#F95721FF",
        warningColorHover: "#FFA080FF",
        warningColorSuppl: "#FFA080FF",
        successColorPressed: "#04AA42FF",
        successColorHover: "#74DF8BFF",
        successColorSuppl: "#74DF8BFF",
        infoColor: "#0097FDFF",
        infoColorSuppl: "#45B6FCFF",
        infoColorHover: "#45B6FCFF",
        infoColorPressed: "#007CFFFF",
      },
    };

    const darkThemeOverrides = {
      common: {
        primaryColor: "#18a058",
        successColor: "#26CD58FF",
        errorColor: "#EA1F49FF",
        errorColorHover: "#F55F7EFF",
        errorColorSuppl: "#F55F7EFF",
        errorColorPressed: "#C51345FF",
        warningColorPressed: "#E04A17FF",
        warningColor: "#F95721FF",
        warningColorHover: "#FFA080FF",
        warningColorSuppl: "#FFA080FF",
        successColorPressed: "#04AA42FF",
        successColorHover: "#74DF8BFF",
        successColorSuppl: "#74DF8BFF",
        infoColor: "#0097FDFF",
        infoColorSuppl: "#45B6FCFF",
        infoColorHover: "#45B6FCFF",
        infoColorPressed: "#007CFFFF",
      },
    };

    return {
      isDark,
      darkThemeOverrides,
      lightThemeOverrides,
      theme,
    };
  },
};
</script>
