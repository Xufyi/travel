// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "babel-polyfill"
import store from './store'

import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"
import 'swiper/dist/css/swiper.css'

import fastclick from "fastclick"
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

var v = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
console.log(v)