<template>
  <el-container class="sys-container">
    <el-aside class="sys-aside" :width="asideWidth">
      <div class="sys-aside-logo">
        <img height="20" src="@/assets/base/logo-dark.png" />
      </div>
      <AsideMenu />
    </el-aside>
    <el-container>
      <el-header class="sys-header">
        <LayoutHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {
    AsideMenu: () => import("./components/AsideMenu"),
    LayoutHeader: () => import("./components/LayoutHeader"),
  },
  data() {
    return {
      asideWidth: "250px",
    };
  },
};
</script>

<style lang="less">
.sys-container {
  height: 100%;
  .sys-aside {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    .sys-aside-logo {
      height: 70px;
      line-height: 70px;
      text-align: center;
    }
  }
  .sys-header {
    background-color: #3051d3;
  }
}
</style>