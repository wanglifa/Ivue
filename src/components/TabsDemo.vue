<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" intro-text="使用 Tabs 作为父组件，子组件使用 Tab 组件，Tabs 绑定 defaultActiveKey 为 Tab 组件里的 key。"/>
  <div class="table-wrapper">
    <h2>API</h2>
    <h3>Tabs</h3>
    <table class="demo-table">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>defaultActiveKey</td>
        <td>对应 Tab 里的 key，用来展示选中的 Tab</td>
        <td>string</td>
        <td>--</td>
      </tr>
    </table>
    <h3>Tab</h3>
    <table class="demo-table">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>title</td>
        <td>标题</td>
        <td>string</td>
        <td>--</td>
      </tr>
      <tr>
        <td>key</td>
        <td>用来对应当前选中的 Tab</td>
        <td>string</td>
        <td>--</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
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
  margin-bottom: 16px;
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
h2 {
  margin-bottom: 16px;
}
.table-wrapper {
  padding-bottom: 16px;
}
h3 {
  margin-bottom: 12px;
}
</style>