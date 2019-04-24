<template>
  <div>
    <div class="mui-slider">
      <div class="mui-slider-group">
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner1.png">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner2.png">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner3.png">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner4.png">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner5.png">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/banner6.png">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <div class="nav-links mui-clearfix">
      <a href="#">
        <img src="./images/nav1.png">
      </a>
      <a href="#">
        <img src="./images/nav2.png">
      </a>
      <a href="#">
        <img src="./images/nav3.png">
      </a>
      <a href="#">
        <img src="./images/nav4.png">
      </a>
      <a href="#">
        <img src="./images/nav5.png">
      </a>
      <a href="#">
        <img src="./images/nav6.png">
      </a>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min'
export default {
  name: 'index',
  mounted () {
    var gallery = mui('.mui-slider')
    gallery.slider({
      interval: 5000
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-links {
  display: flex;
  flex-wrap: wrap;
}
.nav-links a {
  width: 33.333%;
  float: left;
}
.nav-links img {
  width: 100%;
  float: left;
}
</style>
