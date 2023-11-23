<template>
  <div id="app">
    <div v-if="isLoading" class="loading-screen">
      <kinesis-container>
        <kinesis-element :strength="10" type="depth_inv">
          <n-h1>Подождите, сервис {{ loadingText }}</n-h1>
        </kinesis-element>
        <kinesis-element :strength="20" type="depth_inv">
          <img
            class="centered-logo"
            :src="require('./assets/smartofficelogo.svg')"
            alt="Logo"
          />
        </kinesis-element>
      </kinesis-container>
    </div>
    <div v-else>
      <n-switch v-model:value="isDark" size="large">
        <template #checked-icon>
          <n-icon :component="WbSunnyOutlined" />
        </template>
        <template #unchecked-icon>
          <n-icon :component="ModeNightOutlined" />
        </template>
      </n-switch>
      <n-config-provider
        :theme="theme"
        :theme-overrides="
          theme === 'dark' ? darkThemeOverrides : lightThemeOverrides
        "
      >
        <n-global-style />
        <router-view />
      </n-config-provider>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import { ModeNightOutlined, WbSunnyOutlined } from "@vicons/material";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    KinesisContainer,
    KinesisElement,
  },
  setup() {
    const isDark = ref(true);
    const isLoading = ref(true);
    const theme = computed(() => (isDark.value ? "dark" : "light"));
    let loadingText = ref("загружается");

    onMounted(() => {
      let count = 0;
      setInterval(() => {
        count = (count + 1) % 4;
        loadingText.value = "загружается" + ".".repeat(count);
      }, 1000);
      setTimeout(() => {
        isLoading.value = false;
      }, 5000);
    });

    /**
     * @type import('naive-ui').GlobalThemeOverrides
     */

    const lightThemeOverrides = {
      common: {},
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
        bodyColor: "#000",
      },
    };

    return {
      isDark,
      isLoading,
      loadingText,
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
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.centered-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 25vh;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.n-h1:after {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 0.2em;
  vertical-align: -0.2em;
  border-top: 0.4em solid;
  border-right: 0.4em solid transparent;
  transform: rotate(45deg);
  animation: bounce 500ms infinite;
}
</style>
