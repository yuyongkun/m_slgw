import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'

import About from './about.js'
import Chuangxin from './chuangxin.js'
import Duomeiti from './duomeiti.js'
import Shejiksh from './shejiksh.js'

import Contact from '@/components/contact/Contact'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/(index.html)*', //首页
      name: 'Index',
      meta: { title: "首页" },
      component: Index
    },
    ...About,
    ...Chuangxin,
    ...Duomeiti,
    ...Shejiksh,
    {
      path: '/contact/contact.html', //联系我们
      name: 'Contact',
      meta: { title: "联系我们" },
      component: Contact
    },

  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;
