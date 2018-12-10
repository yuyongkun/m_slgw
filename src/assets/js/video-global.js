(function() {
    var idx=0;
    function VideoGlobal(params) {
        params = params || {};
        this.videoPath = params.videoPath;
        init.call(this);
    }

    function init() {
        idx++;
        var webmformat=this.videoPath.split('.mp4')[0]+'.webm';
        var htm = '<div class="video-wrap">' +
            '<div class="mask"></div>' +
            '<video id="video-opt-' + idx + '" class="video-js" controls preload="auto" data-setup="{}">' +
            '<source src="'+this.videoPath+'" type="video/mp4">' +
            '<source src="'+webmformat+'" type="video/webm">' +
            '<p class="vjs-no-js"><a href="https://videojs.com/html5-video-support/" target="_blank">浏览器版本过低，请更新！！！</a> </p>' +
            '</video>' +
            '</div>';
        $(htm).insertBefore(this);
        // 实例化video插件
        this.player = videojs('video-opt-' + idx, {
            muted: false,
            controls: true / false,
            // height:300, 
            // width:300,
            loop: true,
        });
        bindEvent.call(this);
    }
    function bindEvent() {
        var that=this;
        //关闭视频弹框
        $('.video-wrap .mask').on('click', function() {
            $(this).parent().hide();
            that.player.pause();
        });
        //显示视频弹框
        this.click(function() {
            $(this).siblings('.video-wrap').show();
            that.player.play();
        });
    }
    $.prototype.videoOpt = function(params) {
        VideoGlobal.call(this,params);
    }
})();