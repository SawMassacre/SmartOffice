<template>
  <n-data-table
    pagination-behavior-on-filter="first"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>

<script>
import { defineComponent } from "vue";

const columns = [
  {
    title: "Задача",
    key: "taskName",
  },
  {
    title: "Статус",
    key: "taskStatus",
  },
  {
    title: "Дедлайн",
    key: "taskDueDate",
  },
];

const data = [
  {
    key: 1,
    taskName: "Подготовка ТЗ",
    taskStatus: "В работе",
    taskDueDate: "2022-01-01",
  },
  {
    key: 2,
    taskName: "Настройка",
    taskStatus: "Выполнено",
    taskDueDate: "2022-01-02",
  },
  {
    key: 3,
    taskName: "Подготовка документации",
    taskStatus: "Не начата",
    taskDueDate: "2022-01-03",
  },
  {
    key: 4,
    taskName: "Презентация продукта",
    taskStatus: "В работе",
    taskDueDate: "2022-01-04",
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
      pagination: { pageSize: 3 },
    };
  },
});
</script>
