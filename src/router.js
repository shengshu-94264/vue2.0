import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import category from './components/category.vue'
import cart from './components/cart.vue'
import user from './components/user.vue'
import search from './components/search.vue'
import searchlist from './components/searchlist.vue'
import login from './components/login.vue'
import detail from './components/detail.vue'
import address from './components/address.vue'
import register from './components/register.vue'
Vue.use(VueRouter)

var router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: index, meta: { index: 1 } },
    { path: '/category', component: category, meta: { index: 2 } },
    { path: '/cart', component: cart, meta: { index: 3 } },
    { path: '/user', component: user, meta: { index: 4 } },
    { path: '/user/address', component: address, meta: { index: 5 } },
    { path: '/search', component: search, meta: { index: 3 } },
    { path: '/search/searchlist', component: searchlist, meta: { index: 4 } },
    { path: '/search/searchlist/detail', component: detail, meta: { index: 5 } },
    { path: '/login', component: login, meta: { index: 4 } },
    { path: '/login/register', component: register, meta: { index: 3 } }
  ],
  linkActiveClass: 'mui-active'
})
export default router
