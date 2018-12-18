import Xshiyanshi from '@/components/chuangxin/Xshiyanshi'
import Yunxuanran from '@/components/chuangxin/Yunxuanran'
import Detail from '@/components/chuangxin/Detail'
export default [{
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
    path: '/xshiyanshi/case/:id', //x实验室详情
    name: 'Detail',
    meta: { title: "x实验室" },
    component: Detail,
  },
]
 