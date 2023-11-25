<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <kinesis-container>
      <div style="display: flex; gap: 0.5rem; align-items: center">
        <kinesis-element :strength="20" type="depth_inv" style="height: 7rem">
          <n-p>Конференция 22 марта</n-p>
          <img
            :src="news4"
            style="
              height: 7rem;
              border: 1px solid;
              border-radius: 5px;
              border-color: #fff;
            "
          />
        </kinesis-element>
        <kinesis-element :strength="15" type="depth_inv" style="height: 9rem">
          <n-p>Новости 25.11</n-p>
          <img
            :src="news"
            style="
              height: 9rem;
              border: 1px solid;
              border-radius: 5px;
              border-color: #fff;
            "
          />
        </kinesis-element>
        <kinesis-element :strength="25" type="depth_inv" style="height: 11rem">
          <n-p>Работа с ЦА</n-p>
          <img
            :src="news2"
            style="
              height: 11rem;
              border: 1px solid;
              border-radius: 5px;
              border-color: #fff;
            "
          />
        </kinesis-element>
        <kinesis-element :strength="15" type="depth_inv" style="height: 9rem">
          <n-p>Митап Санкт-Петербург</n-p>
          <img
            :src="news3"
            style="
              height: 9rem;
              border: 1px solid;
              border-radius: 5px;
              border-color: #fff;
            "
          />
        </kinesis-element>
        <kinesis-element :strength="20" type="depth_inv" style="height: 7rem">
          <n-p>Большие данные в МТС</n-p>
          <img
            :src="news5"
            style="
              height: 7rem;
              border: 1px solid;
              border-radius: 5px;
              border-color: #fff;
            "
          />
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {
      news: require("../assets/news.png"),
      news2: require("../assets/news2.png"),
      news3: require("../assets/news3.png"),
      news4: require("../assets/news4.png"),
      news5: require("../assets/news5.png"),
    };
  },
};
</script>
