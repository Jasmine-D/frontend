<template>
  <!-- element-ui -->
  <el-container direction="vertical">
    <el-row>
      <el-col :span="14"><div class="bg-purple">欢迎您登陆预约挂号服务平台！</div></el-col>
      <el-col :span="2"><div class="bg-purple"></div></el-col>
      <el-col :span="8"><div class="bg-purple">
        <el-button type="text" style="padding:5px">退出登录</el-button>
      </div></el-col>
    </el-row>
  <el-container>
    <el-aside width="25%">
      <div style="text-align:right">
        <img src="../assets/logo.png" style="height:78px">
      </div>
    </el-aside>
    <el-aside width="25%" style="text-align:left; font-size:25px; padding:25px">
        预约挂号服务平台
    </el-aside>
    <el-main>
      <div style="width:50%">
      <el-input v-model="input" placeholder="请输入医生名进行搜索" suffix-icon="el-icon-search"></el-input>
      </div>
    </el-main>
  </el-container>
  <el-menu
  :default-active="activeIndex2"
  class="menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#4c96e1"
  text-color="#fff"
  active-text-color="#ffd04"
  >
  <el-menu-item index="1" class="menu_item"><a href="#" target="_blank">网站首页</a></el-menu-item>
  <el-menu-item index="2" class="menu_item"><a href="#" target="_blank">预约挂号</a></el-menu-item>
  <el-menu-item index="3" class="menu_item"><a href="#" target="_blank">个人中心</a></el-menu-item>
  <el-menu-item index="4" class="menu_item"><a href="#" target="_blank">预约指南</a></el-menu-item>
</el-menu>
</el-container>
</template>

<script>
export default {
  name: 'UserHeader',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
  .menu-demo{
    padding-left:10%;
    padding-right:10%;
  }
  .menu_item{
  width:25%;
  text-align:center;
  font-size:15px;
  height:35px;
  line-height: 35px;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-col {
    border-radius: 0px;
    text-align: center;
  }
  .el-row {
    height: 30px;
    line-height: 30px;
  }
  .bg-purple {
    background: #d3dce6;
    height: 30px;
    line-height: 30px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    height:90px;
    padding:4px;
  }
  .el-main {
    color: #333;
    text-align: center;
    height:90px;
    line-height:50px;
    padding-left:10%;
  }
</style>
