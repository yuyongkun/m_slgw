import Duomeitsp from '@/components/shejiksh/Duomeitsp'
import Sanweidh from '@/components/shejiksh/Sanweidh'
import Vr360 from '@/components/shejiksh/Vr360'
import Xiaoguotu from '@/components/shejiksh/Xiaoguotu'
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
]
