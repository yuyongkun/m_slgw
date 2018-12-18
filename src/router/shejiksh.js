import Duomeitsp from '@/components/shejiksh/duomeitsp/Duomeitsp'
import Sanweidh from '@/components/shejiksh/sanweidh/Sanweidh'
import Vr360 from '@/components/shejiksh/vr360/Vr360'
import Xiaoguotu from '@/components/shejiksh/xiaoguotu/Xiaoguotu'

import Detail from '@/components/shejiksh/Detail'
export default [{
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
  {
    path: '/xiaoguotu/case/:id', //效果图案例详情
    name: 'Detail',
    meta: { title: "效果图案例详情" },
    component: Detail,
  },
  {
    path: '/vr360/case/:id', //360全景VRAR案例详情
    name: 'Detail',
    meta: { title: "360全景VRAR案例详情" },
    component: Detail,
  },
  {
    path: '/sanweidh/case/:id', //三维动画案例详情
    name: 'Detail',
    meta: { title: "三维动画案例详情" },
    component: Detail,
  },
  {
    path: '/duomeitsp/case/:id', //多媒体视频案例详情
    name: 'Detail',
    meta: { title: "多媒体视频案例详情" },
    component: Detail,
  },
]
