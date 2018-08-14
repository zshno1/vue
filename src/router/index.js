import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hot',
      name: 'hot',
      component (resolve) {
        require(['@/views/hot/hot.vue'], resolve)
      }
    },
    {
      path: '/info',
      name: 'info',
      component (resolve) {
        require(['@/views/info/info.vue'], resolve)
      }
    },
    {
      path: '/user',
      name: 'user',
      component (resolve) {
        require(['@/views/user/user.vue'], resolve)
      }
    }

  ]
})
