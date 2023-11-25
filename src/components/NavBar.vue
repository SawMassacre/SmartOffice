<template>
  <div class="nav-bar">
    <kinesis-container>
      <kinesis-element type="depth_inv" :strength="6">
        <n-menu
          v-model:value="activeKey"
          mode="horizontal"
          :options="menuOptions"
        />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import {
  HomeOutlined,
  HelpOutlineRound,
  HandymanOutlined,
  PersonOutlined,
  ChairOutlined,
  WavingHandOutlined,
} from "@vicons/material";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "Главная",
    key: "home-page",
    icon: renderIcon(HomeOutlined),
  },
  {
    label: "Заказать помощь",
    key: "need-help",
    icon: renderIcon(HandymanOutlined),
  },
  {
    label: "Зона отдыха",
    key: "recreation-page",
    icon: renderIcon(ChairOutlined),
  },
  {
    label: "Мои коллеги",
    key: "my-colleagues",
    icon: renderIcon(WavingHandOutlined),
  },
  {
    label: "Мой профиль",
    key: "my-profile",
    icon: renderIcon(PersonOutlined),
  },
  {
    label: "О приложении",
    key: "about",
    icon: renderIcon(HelpOutlineRound),
  },
];

export default defineComponent({
  components: {
    KinesisContainer,
    KinesisElement,
  },
  setup() {
    return {
      activeKey: ref(null),
      menuOptions,
    };
  },
});
</script>

<style>
.nav-bar {
  margin-bottom: 2rem;
}
</style>
