<template>
  <div id="app">
    <div class="main-wrapper">
      <aside
        :class="{ 'collapse': isCollapse }"
        class="main-sidebar">
        <div class="logo-wrapper">
          <i
            @click="toggleCollapse"
            :class="[isCollapse ? 'fa-folder' : 'fa-folder-open']"
            class="fa logo"></i>
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <article
        :class="{ 'collapse': isCollapse }"
        class="main-content-wrapper">
        <div class="main-content">
          <router-view/>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    updateCollapseStatus () {
      const screenWidth = document.body.clientWidth
      if (screenWidth < 980) {
        this.isCollapse = true
        return
      }
      this.isCollapse = false
    }
  },
  mounted () {
    const self = this
    window.addEventListener('load', self.updateCollapseStatus, false)
    window.addEventListener('resize', self.updateCollapseStatus, false)
  }
}
</script>

<style lang="scss">
  @import '~@/styles/tools/utils';
  @import '~@/styles/global';
  $sidebarWidthOpen: 200px;
  $sidebarWidthClose: 65px;
  #app {
    height: 100%;
  }
  .main-wrapper {
    height: 100%;
    width: 100%;
    font-size: 0;
    line-height: 1;
    .main-sidebar {
      @include verticalAlign(top);
      position: relative;
      z-index: 1;
      height: 100%;
      width: $sidebarWidthOpen;
      font-size: 14px;
      transition: 300ms all linear 0ms;
      background-color: #f5f5f5;
      &.collapse {
        width: $sidebarWidthClose;
      }
      .logo-wrapper {
        display: block;
        text-align: center;
        padding: 20px 0;
        .logo {
          font-size: 30px;
          color: skyblue;
        }
      }
      .el-menu {
        border-right: none;
        background-color: transparent;
      }
    }
    .main-content-wrapper {
      @include verticalAlign(top);
      font-size: 14px;
      height: 100%;
      box-sizing: border-box;
      width: 100%;
      padding-left: $sidebarWidthOpen;
      margin-left: -$sidebarWidthOpen;
      transition: 300ms all linear 0ms;
      background-color: #ffffff;
      &.collapse {
        padding-left: $sidebarWidthClose;
        margin-left: -$sidebarWidthClose;
      }
      .main-content {
        display: block;
        padding: 10px;
        background-color: #eee9dc;
      }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $sidebarWidthOpen;
    min-height: 400px;
  }
</style>
