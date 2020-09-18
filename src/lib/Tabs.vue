<template>
  <div v-for="(title, index) in titleArray" :key="index">{{title}}</div>
  <component v-for="(tab, index) in defaults" :key="index" :is="tab"></component>
</template>
<script lang="ts">
import {SetupContext} from 'vue'
import Tab from './Tab.vue'
export default {
  setup(props, context: SetupContext) {
    const defaults = context.slots.default()
    const titleArray: string[] = []
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
      if (tag.props.title) {
        titleArray.push(tag.props.title)
      }
    })
    return {
      defaults,
      titleArray
    }
  }
}
</script>