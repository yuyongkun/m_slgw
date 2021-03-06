import About from '@/components/about/About'
import Dashib from '@/components/about/Dashib'
import Yinhexgt from '@/components/about/Yinhexgt'
import Shehuizr from '@/components/about/Shehuizr'
import Xcjh from '@/components/about/Xcjh'
export default [{
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
]
