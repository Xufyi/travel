import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name:"city",
      component: City
    },
    {
      path: '/detail/:id',
      name:"detail",
      component: Detail
    }],
    // 解决当前页面滚动页对其他页面造成影响
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
