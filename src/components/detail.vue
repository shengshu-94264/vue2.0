<template>
  <div>
    <div class="mui-slider" ref="box">
      <div class="mui-slider-group">
        <div class="mui-slider-item">
          <a href="#">
            <img :src="'../../static'+picPath">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img :src="'../../static'+picPath">
          </a>
        </div>
      </div>
    </div>
    <div >
    <!-- 商品标题部分 -->
    <div class="pro-name">{{datails.proName}}</div>
    <!-- 商品价格部分 -->
    <div class="pro-price">
      价格：
      <span>&yen;{{datails.price}}</span>
      <span>&yen;{{datails.oldPrice}}</span>
    </div>

    <!-- 商品尺码部分 -->
    <div class="pro-size">
      尺码：
      <!-- span*21{$@40} -->
       <!-- each arr2 value index
      <span>arr[0]++</span> -->
      <!-- <span  v-for="items in arr2" >{{arr[0]++}}</span> -->
      <span  v-for="(items,index) in arr2" :key="items">{{+arr[0]+index}}</span>
    </div>
    <!-- 商品数量部分 -->
    <div class="pro-num">
      数量：
      <span class="reduce" @click="getReduce()">-</span>
      <input type="text" v-model="msg">
      <span class="add" @click="getAdd()">+</span>
      剩余：{{datails.num}}件
    </div>
    <!-- 按钮组 -->
    <div class="pro-cart">
      <button>查看购物车</button>
      <button>加入购物车</button>
    </div>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'detail',
  data () {
    return {
      id: this.$router.currentRoute.query.id,
      datails: [],
      picPath: '',
      arr: '',
      arr2: [],
      msg: 1
    }
  },
  created () {
    this.getdetail()
  },
  updated () {
    var gallery = mui('.mui-slider')
    gallery.slider({
      interval: 1000// 自动轮播周期，若为0则不自动播放，默认为0；
    })
  },
  methods: {
    getdetail () {
      console.log(this.$router.currentRoute.query.id)
      this.axios
        .get('/product/queryProductDetail?id=' + this.id, {
          params: {
            // id: this.id
          }
        })
        .then(response => {
          console.log(response.data)
          this.datails = response.data
          this.arr = this.datails.size.split('-')
          console.log(this.arr)
          this.arr2.length = this.arr[1] - this.arr[0] + 1
          this.picPath = this.datails.pic[0].picAddr
        })
    },
    getAdd () {
      if (this.msg >= this.datails.num) {
        mui.toast('不能再添加了')
        return
      }
      this.msg++
    },
    getReduce () {
      if (this.msg <= 1) {
        mui.toast('不能再减少了')
        return
      }
      this.msg--
    }
  }
}
</script>

<style scoped>
.pro-name {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.pro-price {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
}
.pro-price span:first-child {
  color: #f00;
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
}
.pro-price span:last-child {
  color: #bbb;
  text-decoration: line-through;
}
.pro-size {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.pro-size span {
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #666;
  margin: 5px;
}
.pro-size span.active {
  background-color: #66ccff;
  color: #fff;
}
.pro-num {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.pro-num input {
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
}
.pro-num span,
.pro-num input {
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #666;
}
.pro-num input {
  border-left: 0;
  border-right: 0;
}
.pro-num .add {
  margin-right: 5px;
}
.pro-cart {
  display: flex;
  padding: 10px;
}
.pro-cart button {
  width: 50%;
  color: #fff;
  border: 0;
}
.pro-cart button:first-child {
  background-color: orange;
}
.pro-cart button:last-child {
  background-color: #66ccff;
}

</style>
