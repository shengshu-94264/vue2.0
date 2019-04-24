<template>
  <div class="scroll-h">
    <div class="main-left" >
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul>
            <li
              @click="getcategoryx(item.id),changeColor(i)"
              v-for="(item,i) in newcate"
              :key="item.id"
              class="mui-table-view-cell"
              :class="{'mui-active':i==indexPrev}"
            >{{item.categoryName}} {{i}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul>
            <li v-for="items in newcatex" :key="items.id">
              <img :src="'../../static'+items.brandLogo">
              <!-- <img :src="'.'+require(items.brandLogo)"> -->
               <!-- require('../imges/'+singleImageData.fileName); -->
              <!-- <img src="localhost:3000/mobile/images/brand1.png" alt=""> -->
              {{items.brandName}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'category',
  data () {
    return {
      newcate: [],
      newcatex: [],
      indexPrev: 0,
      id: 1
    }
  },
  created () {
    this.getcategory()
    this.getcategoryx(1)
  },
  methods: {
    getcategory () {
      this.axios.get('/category/queryTopCategory').then(response => {
        if (response.status === 200) {
          this.newcate = response.data.rows
          // mui.toast('成功')
        } else {
          mui.toast('失败')
        }
      })
      console.log(this)
    },
    getcategoryx (ids) {
      // console.log(id)
      this.id = ids
      this.axios.get('/category/querySecondCategory?id=' + this.id)
        .then(response => {
          // console.log(response)
          // console.log(response.data.rows)
          if (response.status === 200) {
            this.newcatex = response.data.rows
          } else {
            mui.toast('失败')
          }
        })
    },
    changeColor (i) {
      this.indexPrev = i
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-h {
  height: 100%;
  display: flex;
}
.main-left {
  position: relative;
  height: 100%;
  width: 100px;
}
.main-left ul {
  padding: 0px;
  margin: 0;
}
.main-left li {
  height: 50px;
  line-height: 50px;
  list-style: none;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.main-right {
  position: relative;
  height: 100%;
  flex: 1;
}
.main-right ul {
  margin: 0px;
  padding: 0px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
}
.main-right ul li {
  width: calc(33.33333333%);
  list-style: none;
  text-align: center;
}
.main-left li.active {
  background-color: #eee;
}
.active {
  background-color: #f00;
}
.main-right ul li img {
  width: calc(100%);
  text-align: center;
}
.mui-scroll-wrapper {
  overflow: scroll;
}
.mui-table-view-cell.mui-active{
	background-color: #0062CC;
}
</style>
