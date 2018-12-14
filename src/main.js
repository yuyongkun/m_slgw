// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/style.css'

import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import './assets/js/video-global.js'
import './assets/less/video_reset.less'

Vue.config.productionTip = false
window.videojs=videojs;
// 全局组件
import Sitemap from '@/components/Sitemap'//地图
Vue.component('site-map', Sitemap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
