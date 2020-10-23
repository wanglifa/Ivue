<template>
  <div class="layout">
    <Topnav class="nav" toggle-menu-button-visible/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol class="component">
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/steps">Steps 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // get
    return {menuVisible};
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav {
    flex-shrink: 0;
  }
  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: calc(20% + 24px);
  }
}
.content {
  display: flex;
  >aside {
    flex-shrink: 0;
    z-index: 10;
  }
  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #5C89EF;
  width: 20%;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  color: #fff;
  >h2 {
    margin-bottom: 4px;
    padding: 8px 16px;
    font-size: 14px;
    color: #ddd;
  }
  >ol {
    &.component {
      padding-left: 12px;
    }
    >li {
      >a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        font-size: 14px;
      }
      .router-link-active {
        background: #4176EA;
      }
    }
  }
}
@media (max-width: 670px) {
  .layout {
    >.content {
      padding-left: 0;
    }
  }
  aside {
    width: 150px;
  }
}
main {
  overflow: auto;
}
</style>