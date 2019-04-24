<template>
  <div id="search-s">
    <div class="search mui-clearfix">
      <input type="text" id="searchText" placeholder="请输入您要搜索的商品" v-model="keyword">
      <input type="button" value="搜索" id="btn" @click="getsearchs()">
    </div>
    <div class="searchList">
      <div class="list-title mui-clearfix">
        <div class="mui-pull-left">搜索历史</div>
        <div class="mui-pull-right clearHistory">
          <span class="mui-icon mui-icon-trash"></span> 清空历史
        </div>
      </div>
      <div class="list-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul>
                 <li @click="searchdd(item)" v-for="(item,i) in history" :key="item.i">{{history[i]}}</li>
            </ul>
          </div>
          <!-- <div id="dd"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'search',
  data () {
    return {
      history: [],
      keyword: ''
    }
  },
  created () {
    this.getsearch()
  },
  methods: {
    getsearch () {
      this.history = localStorage.history ? JSON.parse(localStorage.history) : this.history
      // console.log(this.history)
    },
    getsearchs () {
      console.log(this.keyword)
      if (this.keyword === '') {
        mui.toast('请输入内容')
      } else {
        this.history.unshift(this.keyword)
        localStorage.history = JSON.stringify(this.history)
        // location.href = '/searchlist?keyword=' + this.keyword
        this.$router.push('/search/searchlist?keyword=' + this.keyword)
        this.getsearch()
        // console.log(this.history)
        this.keyword = ''
      }
    },
    searchdd (key) {
      // console.dir(key)
      this.keyword = key
      this.getsearchs()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
    list-style: none
}
#search-s{
  overflow-x: hidden;
}
.search {
  position: relative;
}
 .search #searchText {
  padding: 5px 5px 5px;
  margin: 5px 0 0 5px;
  float: left;
  width: 80%;
  border: 1px solid blue;
}
 .search #btn {
  background-color: blue;
  width: 20%;
  height: 40px;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 0;
  margin-right: 5px;
  border: 1px solid blue;
}
.searchList {
  height: calc(100% - 134px);
}
.searchList .list-title {
  margin: 0px 10px ;
  line-height: 40px;
}
 .searchList .list-title .mui-pull-right {
  height: 40px;
}
.searchList ul{
    padding-left: 10px;
}
.searchList li {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.searchList .list-content {
  height: calc(450px);
  margin: 5px;
  position: relative;
}
</style>
