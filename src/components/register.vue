<template>
  <div>
    <div class="mui-scroll">
      <form class="mui-input-group my-login">
        <div class="mui-input-row">
          <label>用户名</label>
          <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="mui-input-row">
          <label>手机号</label>
          <input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="mobile">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="mui-input-row">
          <label>确认密码</label>
          <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="againPass">
        </div>
        <div class="mui-input-row">
          <label>认证码</label>
          <input type="text" class="mui-input-clear getCodes" placeholder="认证码" v-model="checkCode">
          <span class="getCode" id="getCode" @click="getCodes()" >获取认证码</span>
        </div>
        <div class="mui-input-row login-button">
          <button
            type="button"
            class="mui-btn mui-btn-primary"
            id="regBtn"
            @click="getregister()"
          >注册</button>
        </div>
        <!-- <a href="login.html" class="register">立即登录</a> -->
      </form>
      <a href="login.html" class="register">立即登录</a>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'rgt',
  data () {
    return {
      username: '',
      mobile: '',
      password: '',
      againPass: '',
      checkCode: ''
    }
  },
  methods: {
    getregister () {
      if (!this.username) {
        mui.toast('请输入用户名')
        return
      }
      if (!this.mobile) {
        mui.toast('请输入正确格式的手机号')
        return
      }
      if (!this.password) {
        mui.toast('请输入密码')
        return
      }
      if (!this.againPass) {
        mui.toast('请输入确认密码')
        return
      }
      if (!this.checkCode) {
        mui.toast('请输入验证码')
      }
      this.axios({
        method: 'post',
        url: '/user/register',
        data: {
          username: this.username,
          password: this.password,
          mobile: this.mobile,
          againPass: this.againPass,
          vCode: this.checkCode
        }
      }).then(response => {
        console.log(this.checkCode)
        console.log(response)
      })
    },
    getCodes () {
      this.axios.get('/user/vCode').then(response => {
        console.log(response)
        console.log(response.data.vCode)
      })
    }
  }
}
</script>

<style scoped>
.mui-input-row {
  /* position: relative; */
}
.getCode {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #006699;
}
#regBtn {
  width: 90%;
  text-align: center;
  float: none;
  margin: 1px 5%;
}
.register {
  display: block;
  text-align: right;
  margin: 10px 5%;
  color: #006699;
}
.mui-input-row .login-button {
  border: none;
}
.mui-input-group .my-login {
  border: none;
}
</style>
