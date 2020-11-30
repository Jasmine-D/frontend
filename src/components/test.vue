<template>
    <div class="login_container">
        <el-container>
          <el-header style="height:80px">
          </el-header>
          <span class="line"></span>
          <el-main>
            <div class="inpBox">
              <input type="text" placeholder="请输入手机号" v-model="phone"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="短信验证码" class="short" v-model="code"/>
              <a href="javascript:;" @click="sendclick">获取验证码</a>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="设置密码" v-model="password"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="确认密码" v-model="pwdcheck"/>
            </div>

            <el-button type="primary" round>立即注册</el-button>
          </el-main>
</el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
    // 登录数据绑定对象
      name: '',
      phone: '',
      code: '',
      password: '',
      pwdcheck: ''
    }
  },
  methods: {
    // => 发送验证码
    async sendCode () {
      // =>放置不必要的服务器请求 + 注入式攻击
      if (!/^1\d{10}$/.test(this.phone)) {
        window.alert('请保证手机号码正确！')
        return
        // return
      }
      // => 验证手机号是否被注册
      let data = await this.$api.personal.phone(this.phone)
      if (parseInt(data.code) === 0) { // 已经被注册
        window.alert('当前账号已经被注册！')
        return
      }
      // => 通知服务器发送验证码
      data = await this.$api.personal.phone(this.code)
      if (parseInt(data.code) === 1) {
        window.alert('当前网络繁忙，请稍候再试！')
      }
    }
  }
}

</script>

<style scoped>
  .login_container
  {
      background:#fff;
  }

 .el-header {
    background-color: red;
    color: #333;
    line-height: 40px;
  }

  .logo{
    height: 500px;
  }

  .logo img{
    display: inline-block;
    height: 72px;
    width: 90px;
    position: absolute;
    top:20px;
    left: 175px;
  }

  .logo p{
    font-size: 28px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    top:10px;
    left: 300px;
  }

  .golog{
    float: right;
    padding-right: 500px;
    top: 50px;
  }

  .line{
    height: 3px;
    background-color:rgba(209, 207, 207, 0.979);
    box-shadow:0px 1px 1px 2px rgba(209, 207, 207, 0.979);
  }
  .el-main {
    background-color:blue;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
</style>
