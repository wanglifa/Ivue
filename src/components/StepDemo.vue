<template>
  <div>
    <h1>Steps 组件示例 </h1>
    <Demo :component="Steps1Demo" intro-text="Steps 组件 作为父组件，子组件使用 Step，Steps 绑定一个 current属性，为当前正在进行的步数， Step 组件里我们可以直接使用 title 属性 来作为标题， subTitle 属性作为副标题， description 属性作为描述。"></Demo>
    <Demo :component="Steps2Demo" intro-text="当我们内容过多或者需要设置自己的样式时，我们可以在 Step 组件下面使用 slot 分别对应各个部分。"></Demo>
    <Demo :component="Steps3Demo" intro-text="可以通过设置 direction 属性来修改步骤条为垂直方向的，只需设置为 vertical。"></Demo>
    <div class="table-wrapper">
      <h2>API</h2>
      <h3>Steps</h3>
      <table class="demo-table">
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>current</td>
          <td>当前的步数</td>
          <td>number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向</td>
          <td>string</td>
          <td>horizontal</td>
        </tr>
      </table>
      <h3>Step</h3>
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
          <td>subTitle</td>
          <td>副标题</td>
          <td>string</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>描述</td>
          <td>string</td>
          <td>--</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Steps1Demo from './Steps1.demo.vue'
import Steps2Demo from './Steps2.demo.vue'
import Steps3Demo from './Steps3.demo.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Steps1Demo,
      Steps2Demo,
      Steps3Demo,
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