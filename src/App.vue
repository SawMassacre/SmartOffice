<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="
      theme === 'dark' ? darkThemeOverrides : lightThemeOverrides
    "
  >
    <div>
      <div v-if="!isLoaded" class="loading">
        <p class="loading-text">{{ loadingText }}</p>
        <n-button type="primary">Primary</n-button>
        <n-button type="info">Primary</n-button>
        <n-button type="success">Primary</n-button>
        <n-button type="warning">Primary</n-button>
        <n-button type="error">Primary</n-button>
        <n-switch v-model:value="isDark" />
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
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { NConfigProvider } from "naive-ui";
import "./styles/reset.css";
import "./styles/style.css";

export default {
  components: {
    NConfigProvider,
  },
  setup() {
    const isLoaded = ref(false);
    const loadingText = ref("Сервис загружается, подождите");
    const dotsCount = ref(0);
    let increasing = true;

    const isDark = ref(true);
    const theme = computed(() => (isDark.value ? "dark" : "light"));

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
      darkThemeOverrides,
      lightThemeOverrides,
      theme,
    };
  },
};

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */

const lightThemeOverrides = {
  common: {
    primaryColor: "#000000",
  },
};

const darkThemeOverrides = {
  common: {
    primaryColor: "#ffffff",
  },
};
</script>

<style></style>
