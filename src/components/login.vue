<template>
  <div class="mui-scroll-wrapper">
    <div class="mui-scroll">
      <form class="mui-input-group my-login">
        <div class="mui-input-row">
          <label>用户名</label>
          <input
            type="text"
            class="mui-input-clear"
            placeholder="请输入用户名"
            name="username"
            v-model="username"
          >
        </div>

        <div class="mui-input-row">
          <label>密码</label>
          <input
            type="password"
            class="mui-input-password"
            placeholder="请输入密码"
            name="password"
            v-model="password"
          >
        </div>

        <div class="mui-input-row login-button">
          <button type="button" class="mui-btn mui-btn-primary" id="login" @click="getlogin()">登陆</button>
        </div>
        <!-- <a href="login.html" class="register">立即登录</a> -->
      </form>
      <router-link to="/login/register" class="register">免费注册</router-link>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'cart',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    getlogin () {
      if (!this.username) {
        mui.toast('请输入用户名')
        return
      }
      if (!this.password) {
        mui.toast('请输入密码')
        return
      }
      // this.axios.post('/user/login').then(response => {
      //   console.log(response.message)
      // })
      console.log(typeof this.username)
      this.axios({
        method: 'post',
        url: '/user/login',
        data: {
          username: this.username,
          password: this.password
        },
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        console.log(response)
        console.log(response.data.success)
        if (response.data.success) {
          mui.toast('登陆成功')
          setInterval(() => {
            this.$router.push('/user')
          })
        } else if (response.data.error) {
          mui.toast(response.data.message)
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.getCode {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #006699;
}
#login {
  width: 90%;
  text-align: center;
  float: none;
  margin: -5px 5%;
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
.mui-input-group.my-login {
  border: none;
  padding-top: 44px;
}
.mui-input-group .mui-input-row {
  height: 40px;
  margin: 10px;
  overflow: inherit;
}
</style>
