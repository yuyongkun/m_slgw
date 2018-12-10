<template>
  <div class="video-wrap">
    <div class="mask"></div>
    <video id="video-opt-idx" class="video-js" controls preload="auto" data-setup="{}">
      <source src="videoPath" type="video/mp4">
      <source src="webmformat" type="video/webm">
      <p class="vjs-no-js"><a href="https://videojs.com/html5-video-support/" target="_blank">浏览器版本过低，请更新！！！</a> </p>
    </video>
  </div>
</template>
<script>
var idx=0;
export default {
  data: function() {
    return { videoPath, webmformat, idx }
  }
}

</script>
