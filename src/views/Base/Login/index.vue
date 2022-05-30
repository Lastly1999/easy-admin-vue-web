<template>
  <div class="container">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark logo">
          <img src="../../../assets/logo.png" alt="" /></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark logo">
          <div><el-input
              v-model="admin"
              placeholder="请输入账号"
              class="incontainer"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </div></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark logo">
          <div>
            <el-input
              type="password"
              v-model="passWord"
              placeholder="请输入密码"
              class="incontainer"
              prefix-icon="el-icon-goods"
            ></el-input>
          </div></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark logo">
          <el-button type="primary" class="incontainer">登录</el-button>
        </div></el-col
      >
    </el-row>
    <div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      src="../../../assets/Work.jepg"
      :fit="fit"></el-image>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      admin: "",
      passWord: "",
      style: {},
    };
  },
};
</script>

<style scoped>
.container {
  /* border: 1px solid #000; */
  width: 400px;
  height: 600px;
  margin: 0 auto;
  padding-top: 60px;
}
.logo {
  display: flex;
  justify-content: space-around;
}
.logo > img {
  width: 150px;
}
.incontainer {
  width: 300px;
  margin-top: 20px;
}
</style>