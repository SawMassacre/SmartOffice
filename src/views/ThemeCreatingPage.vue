<template>
  <div>
    <n-theme-editor>
      <h1>Theme Creating Page</h1>
      body text
      <n-button type="primary">Primary</n-button>
      <n-button type="info">Primary</n-button>
      <n-button type="success">Primary</n-button>
      <n-button type="warning">Primary</n-button>
      <n-button type="error">Primary</n-button>
      <n-h1>МТС</n-h1>
      <n-h2>МТС</n-h2>
      <n-h3>МТС</n-h3>
      <n-h4>МТС</n-h4>
      <n-h5>МТС</n-h5>
      <n-h6>МТС</n-h6>
      <n-p>МТС</n-p>
      <tasks-table-component />
    </n-theme-editor>
  </div>
</template>

<script>
import TasksTableComponent from "../components/TasksTableComponent.vue";

export default {
  components: {
    TasksTableComponent,
  },
};
</script>
