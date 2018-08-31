<template>
  <div id="app">
    <div class="main-wrapper">
      <AppSidebar
        :is-collapse="isCollapse"
        :toggle-collapse="toggleCollapse"
      />
      <article
        :class="{ 'collapse': isCollapse }"
        class="main-content-wrapper">
        <AppBreadcrumb />
        <div class="main-content-container">
          <div class="main-content">
            <router-view/>
          </div>
        </div>
        <AppFooter />
      </article>
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar'
import AppBreadcrumb from './components/AppBreadcrumb'
import AppFooter from './components/AppFooter'
export default {
  components: {
    AppSidebar, AppBreadcrumb, AppFooter
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
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
  #app {
    height: 100%;
  }
  .main-wrapper {
    height: 100%;
    width: 100%;
    font-size: 0;
    line-height: 1;
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
      .main-content-container {
        display: block;
        height: 100%;
        padding: 50px 10px;
        background-color: #ffffff;
        box-sizing: border-box;
        margin-top: -40px;
        margin-bottom: -40px;
      }
      .main-content {
        display: block;
        padding: 10px;
        background-color: #eee9dc;
      }
    }
  }
</style>
