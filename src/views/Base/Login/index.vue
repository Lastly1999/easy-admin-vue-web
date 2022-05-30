<template>
  <div class="container">
    <el-container>
      <el-aside width="520px">
        <div>
          <img src="@/assets/logo.png" alt="" width="120px">
        </div>
        
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      admin: "",
      passWord: "",
    };
  },
  methods: {
    showHome() {
      this.$router.push({ path: "/base/home/index" });
    },
  },
};
</script>

<style scoped>

.el-aside {
  background-color: #f1cdd7;
  color: #333;
  text-align: center;
  /* box-sizing: content-box; */
  height: 100vh;
  padding:50px ;
}

.el-main {
  
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

</style>