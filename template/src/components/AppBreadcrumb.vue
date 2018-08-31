<template>
  <header class="site-header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </header>
</template>

<script>
export default {
  name: 'AppBreadcrumb'
}
</script>

<style scoped>
  .site-header {
    padding: 13px;
  }
</style>
