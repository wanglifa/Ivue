<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" intro-text="通过给我们的Dialog组件绑定一个 visible 属性来控制我们组件的展示与隐藏，还可以使用 closeOnClickOverlay 来指定是否可以点击遮罩层关闭我们的弹窗。"/>
  <Demo :component="Dialog2Demo" intro-text="通过调用 openDialog 方法 传入你的标题和内容还可以传入你对按钮操作的回调函数。"/>
  <div class="table-wrapper">
    <h2>API</h2>
    <table class="demo-table">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>visible</td>
        <td>控制组件展示与隐藏</td>
        <td>boolean</td>
        <td>--</td>
      </tr>
      <tr>
        <td>closeOnClickOverlay</td>
        <td>点击遮罩层关闭组件</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>ok</td>
        <td>点击确认按钮的回调操作</td>
        <td>function</td>
        <td>() => void</td>
      </tr>
      <tr>
        <td>openDialog</td>
        <td>调用 Dialog 的方法</td>
        <td>function</td>
        <td>() => void</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
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
h2 {
  margin-bottom: 16px;
}
.table-wrapper {
  padding-bottom: 16px;
}
</style>