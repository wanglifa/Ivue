<template>
  <div>
    <h1>Steps 组件示例 </h1>
    <Demo :component="Steps1Demo"></Demo>
    <Demo :component="Steps2Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Steps1Demo from './Steps1.demo.vue'
import Steps2Demo from './Steps2.demo.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Steps1Demo,
      Steps2Demo
    }
  }
}
</script>