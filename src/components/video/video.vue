<template>
    <div class="video-wrap" v-show="videoWrapShow">
        <div class="mask" v-on:click="maskHide"></div>
        <video :id="videoId" class="video-js" controls preload="auto">
            <source :src="videoPath" type="video/mp4">
            <p class="vjs-no-js"><a href="https://videojs.com/html5-video-support/" target="_blank">浏览器版本过低，请更新！！！</a> </p>
        </video>
    </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'videojs-contrib-hls'
let that;
export default {
    name: 'VideoComponent',
    props: {
      videoPath:{
        type:String,
        default:''
      }
    },
    data: function() {
        return {
            idx: 0,
            videoWrapShow: false,
            videoId: '',
            player: null
        }
    },
    methods: {
        maskHide: function() { //关闭视频弹框
            this.videoWrapShow = !this.videoWrapShow;
            this.player.pause();
        },
        showVideoDailog: function() { //显示视频弹框
            that.videoWrapShow = true;
            // 实例化video插件
            that.player.play();
        }
    },
    beforeMount: function() {
        that = this
        this.idx++;
        this.videoId = 'video-opt-' + this.idx;
    },
    mounted: function() {
        this.player = videojs(this.videoId, {
            muted: false,
            controls: true / false,
            // height:300, 
            // width:300,
            loop: true,
        });

    }
}
</script>
