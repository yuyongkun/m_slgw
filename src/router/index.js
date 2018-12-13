import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/about/About'
import Dashib from '@/components/about/Dashib'
import Yinhexgt from '@/components/about/Yinhexgt'
import Shehuizr from '@/components/about/Shehuizr'
import Xcjh from '@/components/about/Xcjh'
import Detail from '@/components/chuangxin/Detail'
import Contact from '@/components/contact/Contact'
import Xshiyanshi from '@/components/chuangxin/Xshiyanshi'
import Yunxuanran from '@/components/chuangxin/Yunxuanran'
import Chengshixx from '@/components/duomeiti/Chengshixx'
import Shuziyy from '@/components/duomeiti/Shuziyy'
import Yingshihd from '@/components/duomeiti/Yingshihd'
import Huddmt from '@/components/duomeiti/Huddmt'
import Show from '@/components/duomeiti/Show'
import Duomeitsp from '@/components/shejiksh/Duomeitsp'
import Sanweidh from '@/components/shejiksh/Sanweidh'
import Vr360 from '@/components/shejiksh/Vr360'
import Xiaoguotu from '@/components/shejiksh/Xiaoguotu'
Vue.use(Router)
const router = new Router({
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
      path: '/xshiyanshi/case/:id', //x实验室详情
      name: 'Detail',
      meta: { title: "x实验室" },
      component: Detail,
    },

    {
      path: '/contact/contact.html', //联系我们
      name: 'Contact',
      meta: { title: "联系我们" },
      component: Contact
    },
    {
      path: '/chuangxin/xshiyanshi.html', //X实验室
      name: 'Xshiyanshi',
      meta: { title: "X实验室" },
      component: Xshiyanshi
    },
    {
      path: '/chuangxin/yunxuanran.html', //云渲染
      name: 'Yunxuanran',
      meta: { title: "云渲染" },
      component: Yunxuanran
    },
    {
      path: '/duomeiti/chengshixx.html', //城市形象设计
      name: 'Chengshixx',
      meta: { title: "城市形象设计" },
      component: Chengshixx
    },
    {
      path: '/duomeiti/shuziyy.html', //数字影院
      name: 'Shuziyy',
      meta: { title: "数字影院" },
      component: Shuziyy
    },
    {
      path: '/duomeiti/yingshihd.html', //影视动画
      name: 'Yingshihd',
      meta: { title: "影视动画" },
      component: Yingshihd
    },
    {
      path: '/duomeiti/huddmt.html', //互动多媒体
      name: 'Huddmt',
      meta: { title: "互动多媒体" },
      component: Huddmt
    },
    {
      path: '/duomeiti/show.html', //大型Show策划
      name: 'Show',
      meta: { title: "大型Show策划" },
      component: Show
    },
    {
      path: '/shejiksh/xiaoguotu.html', //效果图
      name: 'Xiaoguotu',
      meta: { title: "效果图" },
      component: Xiaoguotu
    },
    {
      path: '/shejiksh/sanweidh.html', //三维动画
      name: 'Sanweidh',
      meta: { title: "三维动画" },
      component: Sanweidh
    },
    {
      path: '/shejiksh/duomeitsp.html', //多媒体视频
      name: 'Duomeitsp',
      meta: { title: "多媒体视频" },
      component: Duomeitsp
    },
    {
      path: '/shejiksh/vr360.html', //360全景VRAR
      name: 'Vr360',
      meta: { title: "360全景/VR/AR" },
      component: Vr360
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
