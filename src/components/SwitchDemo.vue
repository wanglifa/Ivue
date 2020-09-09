<template>
  <div>
    <Switch v-model:value="x"/>
  </div>
</template>
<script lang="ts">
  import Switch from '../lib/Switch.vue'
  import { ref } from 'vue'
  export default {
    name: 'SwitchDemo',
    setup() {
      const x = ref(true)
      return { x }
    },
    components: { Switch }
  }
</script>