<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="onClickToggle">Dialog</Button>
    <Dialog v-model:visible="x" :ok="f1" @cancel="f2" title="我美吗">
      <p>你好呀</p>
      <p>小姐姐</p>
    </Dialog>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue'
  import {ref} from "vue";

  export default {
    name: 'Switch',
    components: {Dialog, Button},
    setup() {
      const x = ref(false)
      const onClickToggle = () => {
        x.value = !x.value
      }
      const f1 = (): Boolean => {
        return false
      }
      const f2 = (): Boolean => {
        return true
      }
      return {x, onClickToggle, f1, f2}
    }
  }
</script>