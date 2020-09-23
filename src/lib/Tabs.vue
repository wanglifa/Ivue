<template>
  <div class="ivue3-tabs">
    <div class="ivue3-tabs-nav">
      <div v-for="(title, index) in titleArray" :key="index" class="ivue3-tabs-nav-item" @click="onClickTab(index)"
        :class="{selected: index === currentIndex}" :ref="titleRefObject[`titleRef${index + 1}`]"
      >{{title}}</div>
    </div>
    <i class="ivue3-tabs-line" :style="{width: selectTitlePosition()?.width + 'px', left: selectTitlePosition()?.left + 'px'}"></i>
    <div class="ivue3-tabs-content">
      <template v-for="(tab, index) in defaults" :key="index">
        <component :is="defaults[currentIndex]" class="ivue3-tabs-content-item"
        ></component>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import {SetupContext, ref, computed, watch} from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    defaultActiveKey: {
      type: String
    }
  },
  setup(props, context: SetupContext) {
    const defaults = context.slots.default()
    const titleArray: string[] = []
    const titleRefObject = {}
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
      if (tag.props.title) {
        titleArray.push(tag.props.title)
      }
      titleRefObject[`titleRef${index + 1}`] = ref<HTMLElement>(null)
    })
    const currentIndex = computed(() => {
      let initIndex = 0
      defaults.forEach((tag, index) => {
        if (tag.props.key === props.defaultActiveKey) {
          initIndex = index
        }
      })
      return initIndex
    })
    const selectTitlePosition = () => {
      if(titleRefObject[`titleRef${currentIndex.value + 1}`].value) {
        let {left, width} = titleRefObject[`titleRef${currentIndex.value + 1}`].value.getBoundingClientRect()
        return {left, width}
      }
    }
    const onClickTab = (index: number) => {
      context.emit('update:defaultActiveKey', defaults[index].props.key)
    }
    return {
      defaults,
      titleArray,
      onClickTab,
      currentIndex,
      titleRefObject,
      selectTitlePosition
    }
  }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ivue3-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
  &-line {
    background: #1890ff;
    height: 2px;
    position: absolute;
    transition: left .3s linear;
  }
}
</style>