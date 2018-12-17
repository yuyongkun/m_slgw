import Guihua from '@/components/shuzizg/guihua/Guihua'
import Qiyezg from '@/components/shuzizg/qiyezg/Qiyezg'
import Zhihuics from '@/components/shuzizg/zhihuics/Zhihuics'
import Shangyeyx from '@/components/shuzizg/shangyeyx/Shangyeyx'
import Xiaozhen from '@/components/shuzizg/xiaozhen/Xiaozhen'

import Detail from '@/components/shuzizg/Detail'
export default [{
    path: '/shuzizg/guihua.html', //城市馆
    name: 'Guihua',
    meta: { title: "城市馆" },
    component: Guihua
  },
  {
    path: '/shuzizg/qiyezg.html', //企业展馆
    name: 'Qiyezg',
    meta: { title: "企业展馆" },
    component: Qiyezg
  },
  {
    path: '/shuzizg/zhihuics.html', //智慧城市
    name: 'Zhihuics',
    meta: { title: "智慧城市" },
    component: Zhihuics
  },
  {
    path: '/shuzizg/shangyeyx.html', //商业营销厅
    name: 'Shangyeyx',
    meta: { title: "商业营销厅" },
    component: Shangyeyx
  },
  {
    path: '/shuzizg/xiaozhen.html', //特色小镇
    name: 'Xiaozhen',
    meta: { title: "特色小镇" },
    component: Xiaozhen
  },
  {
    path: '/guihua/case/:id', //规划馆案例详情
    name: 'Detail',
    meta: { title: "规划馆案例详情" },
    component: Detail,
  },
  {
    path: '/qiyezg/case/:id', //企业展馆案例详情
    name: 'Detail',
    meta: { title: "企业展馆案例详情" },
    component: Detail,
  },
   {
    path: '/shangyeyx/case/:id', //商业营销厅案例详情
    name: 'Detail',
    meta: { title: "商业营销厅案例详情" },
    component: Detail,
  },
  {
    path: '/xiaozhen/case/:id', //特色小镇案例详情
    name: 'Detail',
    meta: { title: "特色小镇案例详情" },
    component: Detail,
  },
   {
    path: '/zhihuics/case/:id', //智慧城市案例详情
    name: 'Detail',
    meta: { title: "智慧城市案例详情" },
    component: Detail,
  },
]
