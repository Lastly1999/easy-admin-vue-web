<template>
  <div class="sys-header-content">
    <i class="swtich-icon el-icon-s-fold"></i>
    <el-input
      class="sys-header-search"
      v-model="input"
      size="small"
      placeholder="请输入内容"
    ></el-input>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "@/assets/style/global.less";

.sys-header-content {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  .swtich-icon {
    font-size: 25px;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
    .hover-water-set-fater();
    .hover-water();
  }
  .sys-header-search {
    width: 200px;
    margin-left: 20px;
  }
}
</style>