<template>
  <div class="ivue3-tabs">
    <div class="ivue3-tabs-nav-wrapper" ref="navRef">
      <div class="ivue3-tabs-nav">
        <div v-for="(title, index) in titleArray" :key="index" class="ivue3-tabs-nav-item" @click="onClickTab(index)"
             :class="{selected: index === currentIndex}" :ref="titleRefObject[`titleRef${index + 1}`]"
        >{{title}}</div>
      </div>
      <i class="ivue3-tabs-line" :style="{width: selectTitlePosition()?.width + 'px', left: selectTitlePosition()?.left + 'px'}"></i>
    </div>
    <div class="ivue3-tabs-content">
      <component :is="defaults[currentIndex]" class="ivue3-tabs-content-item"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import {SetupContext, ref, computed, watchEffect, Ref, onMounted} from 'vue'
import Tab from './Tab.vue'
interface Title {
  [k: string]: Ref;
}
export default {
  props: {
    defaultActiveKey: {
      type: String
    }
  },
  setup(props: any, context: SetupContext) {
    const defaults = context.slots.default!()
    const titleArray: string[] = []
    const titleRefObject: Title = {}
    let currentNavWrapperLeft = 0
    const navRef = ref<HTMLElement | null>(null)
    const selectTitlePosition = ref<() => {left: number, width: number} | undefined>(() => ({left: 0, width: 0}))
    watchEffect(() => {
      console.log('1')
    })
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
      if (tag.props?.title) {
        titleArray.push(tag.props.title)
      }
      titleRefObject[`titleRef${index + 1}`] = ref<HTMLElement | null>(null)
    })
    const currentIndex = computed(() => {
      let initIndex = 0
      defaults.forEach((tag, index) => {
        if (tag.props?.key === props.defaultActiveKey) {
          initIndex = index
        }
      })
      return initIndex
    })
    const onClickTab = (index: number) => {
      context.emit('update:defaultActiveKey', defaults[index].props?.key)
    }
    onMounted(() => {
      currentNavWrapperLeft = navRef.value!.getBoundingClientRect().left
      selectTitlePosition.value = () => {
        if(titleRefObject[`titleRef${currentIndex.value + 1}`].value) {
          console.log(currentNavWrapperLeft, 'left')
          let {left, width} = titleRefObject[`titleRef${currentIndex.value + 1}`].value.getBoundingClientRect()
          return {left: left - currentNavWrapperLeft, width: width as number}
        }
      }
    })
    return {
      defaults,
      titleArray,
      onClickTab,
      currentIndex,
      titleRefObject,
      selectTitlePosition,
      navRef
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
    &-wrapper {
      position: relative;
    }
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