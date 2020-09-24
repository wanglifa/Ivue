<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo2"></use>
      </svg>
      IVue
    </router-link>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <svg class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
  import { inject, Ref } from "vue";
  export default {
    props: {
      toggleMenuButtonVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
      const toggleMenu = () => {
        menuVisible!.value = !menuVisible!.value;
      };
      return { toggleMenu };
    },
  };
</script>
<style lang="scss" scoped>
  $color: #007974;
  .topnav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      display: flex;
      align-items: center;
      font-size: 18px;
      .icon {
        width: 2em;
        height: 2em;
        margin-right: 12px;
      }
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
    > .toggleAside {
      width: 24px;
      height: 24px;
      background: red;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      background: fade-out(black, 0.9);
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }
</style>