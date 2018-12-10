<template>
  <div class="sec lianxi">
    <img src="../assets/images/logo-big.png" class="logo-big">
    <div class="dianhua">
      <img src="../assets/images/dianhua-pic.jpg" class="dianhua">
      <p>400 068 9066</p>
      <div class="cle"></div>
    </div>
    <div class="dizhi">
      <img src="../assets/images/dizhi-pic.jpg">
      <p>深圳市福田保税区市花路花样年
        <br>福年广场 B4栋108室</p>
      <div class="cle"></div>
    </div>
    <div class="shejiao-hao">
      <img src="../assets/images/weixin.jpg" class="weixin">
      <a href="https://m.weibo.cn/u/2037905517?sourceType=qq&amp;uid=2037905517&amp;wm=2468_1001&amp;from=108A395010"><img src="../assets/images/weibo.jpg"></a>
      <img src="../assets/images/QQ.jpg">
      <div class="cle"></div>
    </div>
    <!--百度地图容器-->
    <div class="dituContent" id="dituContent"></div>
    <p class="banshichu">寻洽丝路视觉全球分公司/办事处联系方式</p>
    <a href="../../../../contact/contact.html">
      <div class="btn-banshichu">
        <p>请点击这里</p>
        <img src="../assets/images/arrow.jpg">
        <div class="cle"></div>
      </div>
    </a>
  </div>
</template>
<style>
.dituContent {
  width: 88%;
  height: 56vw;
  border: 1px solid rgb(204, 204, 204);
  margin: 6% auto;
  overflow: hidden;
  position: relative;
  z-index: 0;
  background-image: url("http://api.map.baidu.com/images/bg.png");
  color: rgb(0, 0, 0);
  text-align: left;
}

</style>
<script>
export default {
  name: 'Sitemap',
  mounted: function() {
    //创建和初始化地图函数：
    function initMap() {
      createMap(); //创建地图
      setMapEvent(); //设置地图事件
      addMapControl(); //向地图添加控件
    }

    //创建地图函数：
    function createMap() {
      var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(114.064708, 22.512404); //定义一个中心点坐标
      map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
      map.addControl(ctrl_sca);
    }
    initMap(); //创建和初始化地图
  }

}

</script>
