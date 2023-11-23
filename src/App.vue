<template>
  <div id="app">
    <n-switch v-model:value="isDark" size="large">
      <template #checked-icon>
        <n-icon :component="WbSunnyOutlined" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="ModeNightOutlined" />
      </template>
    </n-switch>
    <n-card>
      <n-config-provider
        :theme="theme"
        :theme-overrides="
          theme === 'dark' ? darkThemeOverrides : lightThemeOverrides
        "
      >
        <router-view />
        <n-global-style />
      </n-config-provider>
    </n-card>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import { ModeNightOutlined, WbSunnyOutlined } from "@vicons/material";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
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
        fontFamily: "MTSWide-Bold",
        fontFamilyMono: "MTSCompact-Regular",
        bodyColor: "#fff",
      },
    };

    const darkThemeOverrides = {
      common: {
        primaryColor: "#000",
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
        fontFamily: "MTSWide-Bold",
        fontFamilyMono: "MTSCompact-Regular",
        bodyColor: "#000",
      },
    };

    return {
      isDark,
      darkThemeOverrides,
      lightThemeOverrides,
      theme,
      ModeNightOutlined,
      WbSunnyOutlined,
    };
  },
};
</script>
