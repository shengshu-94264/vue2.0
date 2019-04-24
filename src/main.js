// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../mui/css/mui.min.css'
import '../mui/fontAwesome/css/font-awesome.min.css'
import '../mui/css/iconfont.css'
// import '../mui/zepto/zepto.min'
import mui from '../mui/js/mui.min'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
Vue.use(VueAxios, axios)
// Vue.use(VueResource)
Vue.prototype.$mui = mui
axios.defaults.baseURL = 'http://localhost:3000'
// Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
mui('body').on('tap', 'a', function () { document.location.href = this.href })
mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005
})
new Vue({
  el: '#app',
  render: c => c(App),
  router
})
