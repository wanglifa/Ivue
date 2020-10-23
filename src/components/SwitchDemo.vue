<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" intro-text="通过 v-model:value 绑定一个布尔值"></Demo>
    <Demo :component="Switch2Demo" intro-text="传入 disabled 属性可以开启禁止切换"></Demo>
    <h2>API</h2>
    <table class="demo-table">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>value</td>
        <td>按钮开启状态</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: none;
  width: 100%;
  font-size: 14px;
  th, td {
    border: 1px solid #ebedf0;
    padding: 14px 16px;
    text-align: left;
    border-width: 1px 0;
  }
  th {
    border-width: 0 0 2px;
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 500;
    background: rgba(0,0,0,.02);
  }
  td {
    &:first-child {
      font-weight: 500;
      width: 20%;
      color: #005cc5;
    }
    &:nth-child(3) {
      width: 22%;
      font-size: 13px;
      color: #c41d7f;
      word-break: break-all;
    }
  }
}
</style>