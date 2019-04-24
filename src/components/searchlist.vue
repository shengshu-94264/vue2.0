<template>
  <div id="refreshContainer">
    <div class="refreshContainer">
      <div class="mui-row filter">
        <div class="mui-col-xs-6" id="priceSort">
          价格
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
        <div class="mui-col-xs-6" id="sold">
          销量
          <span class="mui-icon mui-icon-arrowdown"></span>
        </div>
      </div>
      <div class="product">
        <ul class="list mui-clearfix">
          <li v-for="items in getData" :key="items.id">
            <router-link :to="'/search/searchlist/detail?id='+items.id">
              <img :src="'../../static'+items.pic[0].picAddr" alt>
              <span class="name">{{items.proName}}</span>
              <p>
                <span>¥{{items.price}}</span>
                <span>¥{{items.oldPrice}}</span>
              </p>
              <button class="buy-now mui-btn mui-btn-primary">立即购买</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'searchlist',
  data () {
    return {
      id: this.$route.query.keyword,
      page: 1,
      priceSort: 1,
      sold: 1,
      getData: []
    }
  },
  created () {
    // this.getinit()
  },
  mounted () {
    console.log('页面加载完成')
    this.getinit()
  },
  methods: {
    getinit () {
      console.log(1)
      var that = this // 使 vue 的this指向 that
      console.log(that)
      mui.init({
        pullRefresh: {
          container: '#refreshContainer',
          up: {
            height: 50,
            auto: true,
            contentrefresh: '正在加载...',
            contentnomore: '没有更多数据了',
            callback: function () {
              console.log(this)
              that.axios
                .get('/product/queryProduct', {
                  params: {
                    proName: that.id,
                    price: that.priceSort,
                    num: that.sold,
                    page: that.page++,
                    pageSize: 3
                  }
                })
                .then(response => {
                  console.log(response.data.data)
                  if (response.data.data.length > 0) {
                    that.getData = that.getData.concat(response.data.data)
                    console.log(that.getData)
                    //  console.log(this)
                    this.endPullupToRefresh(false)
                  } else {
                    this.endPullupToRefresh(true)
                  }
                })
            }
          }
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.refreshContainer {
  padding-top: 44px;
  padding-bottom: 50px;
}
.product .title {
  width: 100%;
}
.product ul {
  padding: 6px 0;
}
.product ul li {
  width: 50%;
  float: left;
  padding: 5px;
  list-style: none;
}
.product ul li a {
  display: block;
  box-shadow: 0 0 5px #ccc;
  padding: 5px;
}
.product ul li img {
  width: 100%;
}
.product ul li .name {
  display: block;
  color: #8f8f94;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  height: 38px;
  overflow: hidden;
  padding: 5px;
}
.product ul li p {
  text-align: center;
  padding-top: 6px;
}
.product ul li span:first-child {
  color: #f20;
  padding-right: 2px;
}
.product ul li span:last-child {
  text-decoration: line-through;
  padding-left: 2px;
}
.product ul li .buy-now {
  display: block;
  width: 80px;
  height: 30px;
  background: #006699;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  margin: 0 auto 5px auto;
}
.filter {
  color: rgb(34, 29, 29);
  width: 92%;
  margin: 10px auto 0 auto;
  background-color: rgb(44, 43, 43);
}

.filter .mui-col-xs-6 {
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  background: #efeff4;
}

.filter .mui-icon {
  font-size: 20px;
}

#refreshContainer {
  position: absolute;
  left: 0;
  top: 44px;
  top: 0px;
  bottom: 50px;
  width: 100%;
}
</style>
