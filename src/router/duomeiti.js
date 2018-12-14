import Chengshixx from '@/components/duomeiti/chengshixx/Chengshixx'
import Huddmt from '@/components/duomeiti/huddmt/Huddmt'
import Show from '@/components/duomeiti/show/Show'
import Shuziyy from '@/components/duomeiti/shuziyy/Shuziyy'
import Yingshihd from '@/components/duomeiti/yingshihd/Yingshihd'

import Detail from '@/components/duomeiti/Detail'
export default [{
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
    path: '/chengshixx/case/:id', //
    name: 'Detail',
    meta: { title: "案例详情" },
    component: Detail,
  },
]
