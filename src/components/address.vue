<template>
  <div class>
    <div class="mui-scroll" id="addd">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" style="text-align: center;">
          <a href="addAddress.html">添加收货地址</a>
        </li>
      </ul>
    </div>
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll list-li">
        <ul class="mui-table-view" id="adress">
          <li class="mui-table-view-cell mui-transitioning mui-media" data-val="value">
            <div class="mui-slider-right mui-disabled">
              <a class="mui-btn mui-btn-primary edit">编辑</a>
              <span class="mui-btn mui-btn-red deleteAdress" data-id="value.id">删除</span>
            </div>
            <div class="mui-slider-handle">
              <a href="javascript:;">
                <div class="mui-media-body">
                  邮 编:value.postCode
                  收货人:value.recipients
                  <p class="mui-ellipsis">value.address value.addressDetail</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div id="dd"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Address',
  data () {
    return {}
  },
  created () {
    this.getaddress()
  },
  methods: {
    getaddress () {
      this.axios.get('/address/queryAddress').then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
body,
html {
  height: 100%;
}
.mui-content {
  position: relative;
  height: 100%;
}
#adress {
  height: 100%;
  /* position: absolute; */
  margin-top: 88px;
  margin-bottom: 50px;
}
#addd {
  position: absolute;
  z-index: 5;
}
</style>
