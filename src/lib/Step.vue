<template>
  <div class="ivue3-steps-content-title-wrapper">
    <div class="ivue3-steps-content-title-wrapper-title">
      <slot name="title"></slot>
    </div>
    <div class="ivue3-steps-content-title-wrapper-subTitle">
      <slot name="subTitle"></slot>
    </div>
  </div>
  <div class="ivue3-steps-description">
    <slot name="description"></slot>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue'
export default {
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    description: String,
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const { title, subTitle, description, selected } = props
    const instance = getCurrentInstance()
    console.log(instance, 'insta')
    return {
      title,
      subTitle,
      description,
      selected
    }
  }
}
</script>