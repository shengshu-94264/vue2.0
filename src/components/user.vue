<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media userinfo">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="./images/user.jpg">
          <div class="mui-media-body">mobile
            <p class="mui-ellipsis">username</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="modify.html">修改密码</a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">我的购物车</a>
      </li>
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/user/address">我的收货地址</router-link>
      </li>
      <li class="mui-table-view-cell" id="quit">
        <a>退出登陆</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {}
  },
  // beforeRouteEnter(to,from,next) {
  //  alert(1)
  //  next( v => {
  //    v.axios.get('/user/queryUserMessage').then(response => {
  //      console.log(response)
  //    })
  //  })
  //  },
  created () {
    this.getuser()
  },
  methods: {
    getuser () {
      this.axios.get('/user/queryUserMessage').then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#quit {
  display: inline-block;
  text-align: center;
  width: 90%;
  background-color: #006699;
  margin: 3px 5%;
  border-radius: 5px;
}
</style>
