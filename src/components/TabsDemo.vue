<template>
  <div>
    Tabs 示例
  </div>
  <h1>示例1</h1>
  <Tabs v-model:defaultActiveKey="key">
    <Tab title="导航1" key="1">内容1</Tab>
    <Tab title="导航2" key="2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue'
export default {
  name: 'Switch',
  setup() {
    const key = ref('2')
    return {
      key
    }
  },
  components: {Tab, Tabs}
};
</script>