<template>
  <div>
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="18" class="logo">
          <img src="@/assets/logo.png" alt="">
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.header {
  height: 60px;
  line-height: 60px;
  background: skyblue;
}
img{
  width: 200px;
}
</style>