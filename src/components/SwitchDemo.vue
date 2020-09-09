<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>
<script lang="ts">
  import Switch from '../lib/Switch.vue'
  import { ref } from 'vue'
  export default {
    name: 'SwitchDemo',
    setup() {
      const bool = ref(true)
      return { bool }
    },
    components: { Switch }
  }
</script>