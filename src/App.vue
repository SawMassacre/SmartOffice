<template>
  <n-theme-editor>
    <n-config-provider
      :theme="theme"
      :theme-overrides="
        theme === null ? lightThemeOverrides : darkThemeOverrides
      "
    >
      <div>
        <div v-if="!isLoaded" class="loading">
          <p class="loading-text">{{ loadingText }}</p>
          <n-button>Primary</n-button>
          <n-switch v-model:value="isDark" />

          <n-avatar
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <n-card title="Card"> Card Content </n-card>
        </div>

        <div v-else>
          <h1>МТС</h1>
          <h2>МТС</h2>
          <h3>МТС</h3>
          <h4>МТС</h4>
          <h5>МТС</h5>
          <h6>МТС</h6>
          <p>МТС</p>
        </div>
      </div>
    </n-config-provider>
  </n-theme-editor>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { NConfigProvider, darkTheme, lightTheme, NThemeEditor } from "naive-ui";
import "./styles/reset.css";
import "./styles/style.css";

const darkThemeOverrides = {
  common: {
    primaryColor: "#000000",
    infoColor: "#ff0032",
  },
};

const lightThemeOverrides = {
  common: {
    primaryColor: "#ff0032",
    infoColor: "#ff0032",
    textColor1: "#ffffff",
  },
};

export default {
  components: {
    NConfigProvider,
    NThemeEditor,
  },
  setup() {
    const isLoaded = ref(false);
    const loadingText = ref("Сервис загружается, подождите");
    const dotsCount = ref(0);
    let increasing = true;

    const isDark = ref(true);
    const theme = computed(() => (isDark.value ? darkTheme : lightTheme));

    onMounted(() => {
      const interval = setInterval(() => {
        if (increasing) {
          dotsCount.value += 1;
        } else {
          dotsCount.value -= 1;
        }

        if (dotsCount.value === 3) {
          increasing = false;
        } else if (dotsCount.value === 0) {
          increasing = true;
        }

        const dots = ".".repeat(dotsCount.value);
        loadingText.value = `Сервис загружается, подождите${dots}`;
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        isLoaded.value = true;
      }, 5000000);
    });

    return {
      isLoaded,
      loadingText,
      isDark,
      darkTheme,
      lightTheme,
      theme,
      darkThemeOverrides,
      lightThemeOverrides,
    };
  },
};
</script>

<style></style>
