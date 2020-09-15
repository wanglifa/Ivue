<template>
  <div>
    <button :class="classes" class="ivue3-button">
      <slot/>
    </button>
  </div>
</template>
<script lang="ts">
  import {SetupContext, computed} from 'vue'
  export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'middle'
      }
    },
    setup(props: any) {
      const {theme, size} = props
      const classes = computed(() => {
        return {
          [`ivue3-theme-${theme}`]: theme,
          [`ivue3-size-${size}`]: size
        }
      })
      return {classes}
    }
  }
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .ivue3-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.ivue3-theme-link{
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,&:focus{
        color: lighten($blue, 10%);
      }
    }
    &.ivue3-theme-text{
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }
    &.ivue3-theme-button{
      &.ivue3-size-big{
        font-size: 24px;
        height: 48px;
        padding: 0 16px
      }
      &.ivue3-size-small{
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
      }
    }
  }
</style>