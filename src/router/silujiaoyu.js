import Bim from '@/components/silujiaoyu/Bim'
import Jianzhu from '@/components/silujiaoyu/Jianzhu'
import Shinei from '@/components/silujiaoyu/Shinei'
import Ui from '@/components/silujiaoyu/Ui'
import Youxi from '@/components/silujiaoyu/Youxi'


export default [{
    path: '/silujiaoyu/bim.html', //bim应用课程
    name: 'Bim',
    meta: { title: "bim应用课程" },
    component: Bim
  },
  {
    path: '/silujiaoyu/jianzhu.html', //建筑表现课程
    name: 'Jianzhu',
    meta: { title: "建筑表现课程" },
    component: Jianzhu
  },
  {
    path: '/silujiaoyu/shinei.html', //室内设计课程
    name: 'Shinei',
    meta: { title: "室内设计课程" },
    component: Shinei
  },
   {
    path: '/silujiaoyu/ui.html', //UI设计课程
    name: 'Ui',
    meta: { title: "UI设计课程" },
    component: Ui
  },
   {
    path: '/silujiaoyu/youxi.html', //VR游戏课程
    name: 'Youxi',
    meta: { title: "VR游戏课程" },
    component: Youxi
  },

]
