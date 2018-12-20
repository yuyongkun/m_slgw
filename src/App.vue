<template>
  <div id="app">
    <div id="page">
      <!--menu-->
      <div class="header">
        <a href="#menu"><img src="./assets/images/iconmenu.jpg" style="width: 100%;" /></a>
        <a href="#"><img src="./assets/images/logo.jpg" style="width: 100%;" /></a>
        <a href="tel:400 068 9066"><img src="./assets/images/tel.jpg" style="width: 100%;" /></a>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/index.html">首页</router-link>
          </li>
          <li> <a href="#">关于我们</a>
            <ul>
              <li>
                <router-link to="/about/about.html">企业简介</router-link>
              </li>
              <!-- <li>
                <router-link to="/about/news.html">新闻中心</router-link>
              </li> -->
              <li>
                <router-link to="/about/dashib.html">丝路视觉“大师杯”</router-link>
              </li>
              <li>
                <router-link to="/about/yinhexgt.html">内部沙龙：银河星光厅</router-link>
              </li>
              <li>
                <router-link to="/about/shehuizr.html">社会责任</router-link>
              </li>
              <!-- <li> 
              <router-link to="/about/touzizhe.html">投资者关系</router-link>
              </li> -->
              <li>
                <router-link to="/about/xcjh.html">内部培训：星辰计划</router-link>
              </li>
            </ul>
          </li>
          <li><a href="#">数字展馆</a>
            <ul>
              <li>
                <router-link to="/shuzizg/guihua.html">城市馆</router-link>
              </li>
              <li>
                <router-link to="/shuzizg/xiaozhen.html">特色小镇/产业园</router-link>
              </li>
              <li>
                <router-link to="/shuzizg/zhihuics.html">智慧城市</router-link>
              </li>
              <li>
                <router-link to="/shuzizg/qiyezg.html">企业展馆</router-link>
              </li>
              <li>
                <router-link to="/shuzizg/shangyeyx.html">商业营销厅</router-link>
              </li>
            </ul>
          </li>
          <li><a href="#">多媒体应用</a>
            <ul>
              <li>
                <router-link to="/duomeiti/chengshixx.html">城市形象设计</router-link>
              </li>
              <li>
                <router-link to="/duomeiti/shuziyy.html">数字影院</router-link>
              </li>
              <li>
                <router-link to="/duomeiti/yingshihd.html">影视动画</router-link>
              </li>
              <li>
                <router-link to="/duomeiti/huddmt.html">互动多媒体</router-link>
              </li>
              <li>
                <router-link to="/duomeiti/show.html">大型Show策划</router-link>
              </li>
            </ul>
          </li>
          <li><a href="#">设计可视化</a>
            <ul>
              <li>
                <router-link to="/shejiksh/xiaoguotu.html">效果图</router-link>
              </li>
              <li>
                <router-link to="/shejiksh/sanweidh.html">三维动画</router-link>
              </li>
              <li>
                <router-link to="/shejiksh/duomeitsp.html">多媒体视频</router-link>
              </li>
              <li>
                <router-link to="/shejiksh/vr360.html">360全景/VR/AR</router-link>
              </li>
            </ul>
          </li>
          <li><a href="#">丝路教育</a>
            <ul>
              <li>
                <router-link to="/silujiaoyu/jianzhu.html">建筑表现课程</router-link>
              </li>
              <li>
                <router-link to="/silujiaoyu/shinei.html">室内设计课程</router-link>
              </li>
              <li>
                <router-link to="/silujiaoyu/ui.html">UI设计课程</router-link>
              </li>
              <li>
                <router-link to="/silujiaoyu/youxi.html">VR游戏课程</router-link>
              </li>
              <li>
                <router-link to="/silujiaoyu/bim.html">BIM应用课程</router-link>
              </li>
            </ul>
          </li>
          <li><a href="#">创新业务</a>
            <ul>
              <li>
                <router-link to="/chuangxin/yunxuanran.html">云渲染</router-link>
              </li>
              <li>
                <router-link to="/chuangxin/xshiyanshi.html">X 实验室</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">联系我们</a>
            <ul>
              <li>
                <router-link to="/contact/contact.html">联系方式</router-link>
              </li>
              <!--<li>
              <router-link to="contact/zxns.html">招贤纳士</router-link>
              </li>-->
            </ul>
          </li>
        </ul>
      </nav>
      <!--menu-->
    </div>
    <router-view/>
    <footer>
      <div class="beian-sum">粤ICP备11044640号-6
        <br>版权归丝路视觉科技股份有限公司所有</div>
    </footer>
  </div>
</template>
<script>
import './assets/css/jquery.mmenu.css'
import './assets/js/jquery.mmenu.min.js'
import './assets/css/menu.css'
export default {
  name: 'App',
  mounted: function() {
    window.mmenu = $('nav#menu').mmenu();
  },
  watch: {
    $route: function() {
      window.scrollTo(0,0)
      window.mmenu.trigger('close')
    }
  }

}

</script>
