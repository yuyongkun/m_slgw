// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import './assets/js/video-global.js'

import './assets/css/jquery.mmenu.css'
import './assets/js/jquery.mmenu.min.js'

import './assets/css/style.css'
import './assets/css/menu.css'

import Sitemap from '@/components/Sitemap'

Vue.config.productionTip = false

// 全局组件
Vue.component('site-map', Sitemap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted: function() {
    window.mmenu=$('nav#menu').mmenu();
  },
  watch:{
  	$route:function(){
  		window.mmenu.trigger('close')
  	}
  }

})
