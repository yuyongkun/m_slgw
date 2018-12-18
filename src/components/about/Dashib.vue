<template>
  <div class="container">
    <!--关于-->
    <div class="sec guanyu">
      <h1>关于丝路视觉“大师杯”</h1>
      <h2>行业内的红地毯</h2>
      <p>丝路视觉“大师杯”是由丝路视觉创办，面向数字视觉行业从业人员、艺术专业在校大学生，以及数字视觉行业爱好者的视觉创意大赛。旨在体现数字视觉的文化传播、技术创新与应用价值，提高行业专业技术水平，展示作品背后的社会价值、文化传播价值、视觉技术，从而提升视觉行业的公众认知度，推动整体市场不断发展创新。</p>
    </div>
    <!--案例-->
    <div class="sec anli">
      <div class="anli-title" style="margin-bottom: 6%;"> <img src="../../assets/images/about/dashib/wuxing.png" style="margin-left: 24%;">
        <h1>往期精彩回顾</h1>
        <img src="../../assets/images/about/dashib/wuxing.png">
        <div class="cle"></div>
      </div>
      <img src="../../assets/images/about/dashib/img1.jpg" class="anli-pic"> <img src="../../assets/images/about/dashib/img2.jpg" class="anli-pic"> <img src="../../assets/images/about/dashib/img3.jpg" class="anli-pic"> <img src="../../assets/images/about/dashib/img4.jpg" class="anli-pic"> <img src="../../assets/images/about/dashib/img5.jpg" class="anli-pic"> </div>
    <!--2018丝路视觉“大师杯”详情-->
    <div class="sec anli">
      <div class="anli-title"> <img src="../../assets/images/about/dashib/wuxing.png" style="margin-left:10%;">
        <h1>2018丝路视觉“大师杯”</h1>
        <img src="../../assets/images/about/dashib/wuxing.png">
        <div class="cle"></div>
      </div>
      <p>盛大召开，强势助力第十四届文博会</p>
    </div>
    <img src="../../assets/images/about/dashib/sijie1.jpg" style="width: 100%;margin-top: 4%;"> <img src="../../assets/images/about/dashib/sijie2.jpg" style="width: 100%;margin-top: 6%;">
    <div class="sijie-list" :style="sijiebgimg">
      <div class="sijie-3">
        <img id="video-play-1" class="video-play" src="../../assets/images/about/dashib/video1.jpg">
        <p style="padding-top: 4%;padding-bottom: 4%; padding-left: 4%;">最佳商业短片《深圳湾1号莱佛士公寓》</p>
      </div>
      <div class="sijie-3">
        <img id="video-play-2" class="video-play" src="../../assets/images/about/dashib/video2.jpg">
        <p style="padding-top: 4%;padding-bottom: 4%; padding-left: 4%;">最佳网络互动《五粮液云上艺术馆》</p>
      </div>
      <div class="sijie-3">
        <img id="video-play-3" class="video-play" src="../../assets/images/about/dashib/video3.jpg">
        <p style="padding-top: 4%;padding-bottom: 4%; padding-left: 4%;">最佳社会影响力奖《真理永恒》</p>
      </div>
    </div>
    <img src="../../assets/images/about/dashib/4444.jpg" style="width: 100%;margin-top: 4%; margin-bottom: 4%;">
    <site-map></site-map>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      sijiebgimg: `background-image:url(${require("../../assets/images/about/dashib/dsbbj.jpg")})`
    }
  },
  mounted() {
    $('#video-play-1').videoOpt({
      videoPath: require('../../assets/media/dashib/video1.mp4')
    });
    $('#video-play-2').videoOpt({
      videoPath: require('../../assets/media/dashib/video2.mp4')
    });
    $('#video-play-3').videoOpt({
      videoPath: require('../../assets/media/dashib/video3.mp4')
    });
  }
}

</script>
<style scoped>
.sijie-3 {
  margin-top: 6%;
  width: 88%;
  margin: 0 auto;
}

.sijie-list {
  margin: 0 auto;
  background-size: 100%;
  height: 186vw;
  padding-top: 24%;
}


</style>
