<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" intro-text="接受一个 theme 类型是字符串，支持 link 和 text 已经默认类型"/>
    <Demo :component="Button2Demo" intro-text="我们可以传入一个 size 来修改按钮的大小尺寸，支持 big small 和 middle"/>
    <Demo :component="Button3Demo" intro-text="可以通过传入一个 level 来修改按钮的状态"/>
    <Demo :component="Button4Demo" intro-text="我们可以使用 disabled 属性设置按钮的禁用状态"/>
    <Demo :component="Button5Demo" intro-text="当我们传入一个 loading 属性时，按钮会显示一个loading状态"/>
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
          <td>theme</td>
          <td>按钮主题类型</td>
          <td>string('link' || 'text' || 'button')</td>
          <td>'button'</td>
        </tr>
        <tr>
          <td>size</td>
          <td>按钮尺寸</td>
          <td>string('small' || 'middle' || 'big')</td>
          <td>'button'</td>
        </tr>
        <tr>
          <td>level</td>
          <td>按钮级别</td>
          <td>string('normal' || 'main' || 'danger')</td>
          <td>'normal'</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>按钮禁用状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>按钮是否有加载中动画</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  },
};
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