<demo>
常规用法
</demo>
<template>
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