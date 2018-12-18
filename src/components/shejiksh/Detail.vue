<template>
  <div class="container">
    <div class="banner">
      <div class="banner-cover">
        <img :src="cover">
      </div>
      <div class="wenzi">
      <div class="b-title" v-html="coverTitle"></div>
      <img v-if="videopath" class="video-play" id="video-play" src="../../assets/images/bofang.png">
      </div>
    </div>
    <div class="sec jianjie">
      <h1>客户</h1>
      <p v-html="techapplication"></p>
      <h1>应用场景</h1>
      <p>{{applicacenario}}</p>
      <h1>作品属性</h1>
      <p>{{workproperty}}</p>
      <h1>项目说明</h1>
      <p v-html="projectdesc"></p>
   
    </div>
    <!-- 成果展示 -->
    <div class="sec peitu">
     <!--  <h1>成果展现</h1> -->
      <img v-for="achiev in achievements" :src="achiev">
    </div>

      <site-map></site-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cover: '',
      coverTitle: '',
      videopath: '',
      techapplication: '',
      applicacenario: '',
      workproperty: '',
      projectdesc: '',
      show: '',
      achievements: [],
    }
  },
  created() {
    let datalist = require(`.${this.$route.path.split('/case')[0]}/data.json`).datalist;
    let id = this.$route.params.id.split('.html')[0];
    let achievements = [];
    datalist.forEach((item) => {
      if (item.id === id) {
        this.cover = require(`@/assets/${item.cover}`);
        this.coverTitle = item.coverTitle;
        if(item.videopath){
          this.videopath = require(`@/assets/${item.videopath}`);
        }
        
        this.techapplication = item.techapplication;
        this.applicacenario = item.applicacenario;
        this.workproperty = item.workproperty;
        this.projectdesc = item.projectdesc;
        this.show = item.show;
        achievements = item.achievements;
      }
    });
    achievements.forEach((item) => {
      this.achievements.push(require(`@/assets/${item}`));
    });
  },
  mounted() {
    if(this.videopath){
      $('#video-play').videoOpt({
      videoPath: this.videopath
    });
    }
    
  }
}

</script>
<style scoped>
.banner {
  position: relative;
  margin-bottom: 10px;
}

.banner .banner-cover:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
}

.peitu h1 {
  padding-bottom: 2%;
  padding-left: 5%
}

</style>
