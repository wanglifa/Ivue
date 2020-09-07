<template>
  <button @click="toggle" :class="{checked: value}"><span></span></button>
</template>
<script lang="ts">
  interface Prop {
    value: boolean;
  }
  import { ref } from 'vue'
  export default {
    props: {
      value: Boolean
    },
    setup(props: Prop, context: any) {
      const toggle = () => {
        context.emit('input', !props.value)
      }
      return {toggle}
    }
  }
</script>
<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left .25s;
  }
  button.checked{
    background: blue;
  }
  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  button:focus {
    outline: none;
  }
</style>