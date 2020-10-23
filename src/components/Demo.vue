<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-intro">{{introText}}</div>
    <div class="demo-actions" @click="toggleCode">
      <svg>
        <use xlink:href="#icon-daima"></use>
      </svg>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
import {
  ref
} from 'vue'
interface Prop {
  component: any;
  introText: string;
}
export default {
  props: {
    component: Object,
    introText: String
  },
  components: {
    Button
  },
  setup(props: Prop) {
    const bool = ref(false)
    const codeVisible = ref(false)
    const html = Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value
    }
    const { introText } = props
    return {
      bool,
      Prism,
      html,
      codeVisible,
      toggleCode,
      introText
    }
  }
}
</script>
<style lang="scss">
.language-html {
  background: none !important;
  span {
    line-height: 1.5;
  }
}
</style>
<style lang="scss" scoped>
$border-color: #ebedf0;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 18px;
    padding: 14px 24px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 24px;
  }
  &-intro {
    padding: 14px 24px;
    border-top: 1px solid $border-color;
    color: #314659;
    font-size: 14px;
    line-height: 1.5;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    text-align: center;
    svg {
      cursor: pointer;
      fill: #cbcbcb;
      width: 30px;
      height: 30px;
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>