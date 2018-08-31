<template>
  <footer class="site-footer">
    <small class="text">XX有限公司开发</small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/tools/utils';
  .site-footer {
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
    padding: 0 20px;
    .text {
      @include verticalAlign();
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }
  }
</style>
