<template>
  <div id="app">
    <n-config-provider
      :theme="theme"
      :theme-overrides="
        theme === 'dark' ? darkThemeOverrides : lightThemeOverrides
      "
    >
      <div v-if="isLoading" class="loading-screen">
        <kinesis-container>
          <kinesis-element :strength="10" type="depth_inv">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <n-h1>Подождите, сервис </n-h1>
              <n-h1 class="animate__animated animate__pulse animate__infinite"
                >загружается...</n-h1
              >
            </div>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth_inv">
            <img
              class="centered-logo"
              :src="require('./assets/smartofficelogo.svg')"
              alt="Logo"
            />
          </kinesis-element>
        </kinesis-container>
        <n-divider style="width: 30vw" />
      </div>
      <div v-else>
        <NavBar></NavBar>
        <n-switch v-model:value="isDark" size="large">
          <template #checked-icon>
            <n-icon :component="WbSunnyOutlined" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="ModeNightOutlined" />
          </template>
        </n-switch>
        <router-view />
      </div>
      <n-global-style />
    </n-config-provider>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import { ModeNightOutlined, WbSunnyOutlined } from "@vicons/material";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    KinesisContainer,
    KinesisElement,
    NavBar,
  },
  setup() {
    const isDark = ref(true);
    const isLoading = ref(true);
    const theme = computed(() => (isDark.value ? "dark" : "light"));

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    });

    /**
     * @type import('naive-ui').GlobalThemeOverrides
     */

    const lightThemeOverrides = {
      common: {
        baseColor: "#FFFFFFFF",
        warningColor: "#C68926FF",
        primaryColor: "#E30611FF",
        primaryColorHover: "#FF4851FF",
        primaryColorPressed: "#BB040DFF",
        primaryColorSuppl: "#FF4851FF",
        infoColor: "#007CFFFF",
        infoColorHover: "#5AA8FAFF",
        infoColorSuppl: "#5AA8FAFF",
        infoColorPressed: "#055CB8FF",
        warningColorHover: "#EBA636FF",
        warningColorPressed: "#A97520FF",
        warningColorSuppl: "#EBA636FF",
        errorColor: "#E74E1AFF",
        errorColorHover: "#E77852FF",
        errorColorPressed: "#B03B13FF",
        errorColorSuppl: "#E77852FF",
        textColor1: "#1D2023FF",
        textColor2: "#626C77FF",
        iconColor: "#969FA8FF",
        iconColorHover: "#BEC7D0FF",
        iconColorPressed: "#676F76FF",
        iconColorDisabled: "#C9CFD6FF",
        successColor: "#18A058BD",
        successColorHover: "#36AD6AC4",
        successColorPressed: "#0C7A43C7",
        textColorBase: "#FFFFFFFF",
        textColor3: "#626C77FF",
        fontFamily: "MTSWide-Bold",
        fontFamilyMono: "MTSCompact-Regular",
        bodyColor: "#fff",
        dividerColor: "#a8040c",
      },
      Typography: {
        headerFontSize1: "32px",
        headerFontSize2: "24px",
        headerFontSize3: "20px",
        pFontSize: "17px",
      },
    };

    const darkThemeOverrides = {
      common: {
        baseColor: "#FFFFFFFF",
        warningColor: "#C68926BD",
        primaryColor: "#E30611BD",
        primaryColorHover: "#FF4851C4",
        primaryColorPressed: "#BB040DC7",
        primaryColorSuppl: "#FF4851FF",
        infoColor: "#007CFFBD",
        infoColorHover: "#5AA8FAC4",
        infoColorSuppl: "#5AA8FAFF",
        infoColorPressed: "#055CB8C7",
        warningColorHover: "#EBA636C4",
        warningColorPressed: "#A97520C7",
        warningColorSuppl: "#EBA636FF",
        errorColor: "#E74E1ABD",
        errorColorHover: "#E77852C4",
        errorColorPressed: "#B03B13C7",
        errorColorSuppl: "#E77852FF",
        textColor1: "#FAFAFAFF",
        textColor2: "#969FA8FF",
        iconColor: "#FFFFFFFF",
        iconColorHover: "#969FA8FF",
        iconColorPressed: "#626C77FF",
        iconColorDisabled: "#C9CFD6FF",
        successColor: "#18A058BD",
        successColorHover: "#36AD6AC4",
        successColorPressed: "#0C7A43C7",
        textColorBase: "#FFFFFFFF",
        textColor3: "#626C77FF",
        fontFamily: "MTSWide-Bold",
        fontFamilyMono: "MTSCompact-Regular",
        bodyColor: "#000",
        dividerColor: "#fff",
      },
      Typography: {
        headerFontSize1: "32px",
        headerFontSize2: "24px",
        headerFontSize3: "20px",
        pFontSize: "17px",
      },
    };

    return {
      isDark,
      isLoading,
      darkThemeOverrides,
      lightThemeOverrides,
      theme,
      ModeNightOutlined,
      WbSunnyOutlined,
    };
  },
};
</script>

<style scoped>
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.centered-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 10rem;
}
</style>
