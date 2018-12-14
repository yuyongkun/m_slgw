<template>
  <div class="container">
    <div class="banner">
      <div class="banner-cover">
        <img :src="cover">
      </div>
      <div class="b-title" v-html="coverTitle"></div>
      <img class="video-play" id="video-play" src="../../assets/images/bofang.png">
    </div>
    <div class="sec jianjie">
      <h1>技术应用</h1>
      <p>{{techapplication}}</p>
      <h1>应用场景</h1>
      <p>{{applicacenario}}</p>
      <h1>作品属性</h1>
      <p>{{workproperty}}</p>
      <h1>项目说明</h1>
      <p>{{projectdesc}}</p>
    </div>
    <!-- 成果展示 -->
    <div class="sec peitu">
      <h1>成果展现</h1>
      <img v-for="achiev in achievements" :src="achiev">
    </div>
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
        this.videopath = require(`@/assets/${item.videopath}`);
        this.techapplication = item.techapplication;
        this.applicacenario = item.applicacenario;
        this.workproperty = item.workproperty;
        this.projectdesc = item.projectdesc;
        achievements = item.achievements;
      }
    });
    achievements.forEach((item) => {
      this.achievements.push(require(`@/assets/${item}`));
    });
  },
  mounted() {
    $('#video-play').videoOpt({
      videoPath: this.videopath
    });
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

.banner img {
  display: block;
  width: 100%;
  position: relative;
}

.banner .b-title {
  font-size: 8vw;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 30vw;
  color: rgb(255, 255, 255);
  width: 100%;
}

.banner .video-play {
  position: relative;
  display: block;
  position: absolute;
  top: 50vw;
  width: 14%;
  left: 50%;
  margin-left: -7%;
}

.peitu h1 {
  padding-bottom: 2%;
  padding-left: 5%
}

</style>
