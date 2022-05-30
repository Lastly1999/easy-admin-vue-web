<template>
  <el-menu
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    text-color="#7c8a96"
    active-text-color="#3051d3"
    :border="false"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style lang="less">
@import "@/assets/style/global.less";
/* 以下为element-ui 样式重写 */


// element-ui 子菜单 -> menu-item
.el-menu-item:focus,
.el-menu-item:hover {
  transition: background-color 0.3s linear, border 0.3s linear;
  background: transparent;
  .hover-water-set-fater();
  .hover-water();
}

// element-ui 父菜单 -> submenu-item
.el-submenu__title:focus,
.el-submenu__title:hover {
  background: transparent;
  .hover-water-set-fater();
  .hover-water();
}

.el-menu {
  border: none;
}
</style>