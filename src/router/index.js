import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/about/About'
import Dashib from '@/components/about/Dashib'
import Yinhexgt from '@/components/about/Yinhexgt'
import Shehuizr from '@/components/about/Shehuizr'
import Xcjh from '@/components/about/Xcjh'
import Xshiyanshi from '@/components/chuangxin/Xshiyanshi'
import Detail from '@/components/chuangxin/Detail'
import Yunxuanran from '@/components/chuangxin/Yunxuanran'
Vue.use(Router)
const router=new Router({
  mode: 'history',
  routes: [{
      path: '/(index.html)*', //首页
      name: 'Index',
      meta: { title: "首页" },
      component: Index
    },
   
    {
      path: '/about/about.html', //企业简介
      name: 'About',
      meta: { title: "企业简介" },
      component: About
    },
    {
      path: '/about/dashib.html', //丝路视觉“大师杯”
      name: 'Dashib',
      meta: { title: "丝路视觉“大师杯”" },
      component: Dashib
    },
    {
      path: '/about/yinhexgt.html', //内部沙龙：银河星光厅
      name: 'Yinhexgt',
      meta: { title: "内部沙龙：银河星光厅" },
      component: Yinhexgt
    },
    {
      path: '/about/shehuizr.html', //社会责任
      name: 'Shehuizr',
      meta: { title: "社会责任" },
      component: Shehuizr
    },
    {
      path: '/about/xcjh.html', //内部培训：星辰计划
      name: 'Xcjh',
      meta: { title: "内部培训：星辰计划" },
      component: Xcjh
    }, 
    {
      path: '/chuangxin/xshiyanshi.html', //x实验室
      name: 'Xshiyanshi',
      meta: { title: "x实验室" },
      component: Xshiyanshi
    },
    {
      path: '/xshiyanshi/case/:id', //x实验室详情
      name: 'Detail',
      meta: { title: "x实验室" },
      component: Detail,
    },
     {
      path: '/chuangxin/yunxuanran.html', //云渲染
      name: 'Yunxuanran',
      meta: { title: "云渲染" },
      component: Yunxuanran
    },
  ]
})
router.beforeEach((to,from,next)=>{
	if(to.meta.title){
		document.title=to.meta.title
	}
	next()
})
export default router;