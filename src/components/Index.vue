<template>
    <div class="container">
        <!--头图-->
        <div class="banner" style="position: relative"> <img src="../assets/images/banner.gif" style="width: 100%;position: relative;">
            <div class="wenzi">
                <div class="banner-title" style="top:30vw;color: #fff;text-align: center;font-size: 8vw;">用数字定义你的视界</div>
                <img id="video-play" class="video-play" src="../assets/images/bofang.png" > </div>
            </div>
            <!-- <VideoComponent ref="child" v-bind:videoPath='videopath'></VideoComponent> -->
            <div class="boxgd" style="margin-top: 0px;"></div>
            <!--核心业务-->
            <div class="hexin">
                <h1>核心业务</h1>
                <ul>
                    <router-link to="/shuzizg/guihua.html">
                        <li>
                         <img src="../assets/images/hexin01.jpg">
                     </li>
                     <li style=" margin-left:4%;">
                        <p>数字展馆</p>
                        <p>利用前沿的数字化
                            <br /> 科技手段构筑人物共鸣的
                            <br /> 非凡展示空间 </p>
                        </li>
                    </router-link>

                    <router-link to="/duomeiti/chengshixx.html">
                        <li style=" margin-right: 4%; text-align: right;">
                            <p>多媒体应用</p>
                            <p>超越想象的视觉
                                <br /> 创新，打破感官界限的
                                <br /> 全领域应用 </p>
                            </li>
                            <li>
                             <img src="../assets/images/hexin02.jpg">
                         </li>

                     </router-link>

                     <router-link to="/shejiksh/xiaoguotu.html">
                        <li>
                          <img src="../assets/images/hexin03.jpg">
                      </li>
                      <li style=" margin-left:4%;">
                        <p>设计可视化</p>
                        <p>用最直接的视觉
                            <br /> 语言，呈现巧夺天工的
                            <br /> 设计灵感 </p>
                        </li>
                    </router-link>

                    <router-link to="/silujiaoyu/jianzhu.html">
                        <li style=" margin-right: 4%; text-align: right;">
                            <p>丝路教育</p>
                            <p>中国十大IT教育品牌
                                <br /> 每年输送2000 + CG
                                <br /> 设计人才 </p>
                            </li>
                            <li>
                             <img src="../assets/images/hexin04.jpg">
                         </li>
                     </router-link>
                     <router-link to="/chuangxin/xshiyanshi.html">
                        <li>
                            <a href="zt/chuangxin/yunxuanran.html"><img src="../assets/images/hexin05.jpg"></a>
                        </li>
                        <li style=" margin-left:4%;">
                            <p>创新业务</p>
                            <p>丝路视觉专属的
                                <br /> X实验室&云渲染
                            </p>
                        </li>
                    </router-link>
                </ul>
                <div class="c"></div>
            </div>
            <div class="boxgd"></div>
            <!--核心业务-->
            <!--视觉科技领域上市公司-->
            <div class="shangshi">
                <h1>视觉科技领域上市公司</h1>
                <h2>股票代码：300556</h2>
                <img src="../assets/images/shangshi.jpg"> </div>
                <div class="boxgd"></div>
                <!--视觉科技领域上市公司-->
                <!--专业资格认证-->
                <div class="zizhi">
                    <h1>专业资格认证</h1>
                    <div style=" width: 90%; margin: 0 5%; padding-top: 20px;">
                        <p>★&nbsp;中国展览馆协会展览工程一级资质</p>
                        <p>★&nbsp;展览展示设计工程甲级资质</p>
                        <p>★&nbsp;展览展示制作施工一级资质</p>
                        <p>★&nbsp;中国城市规划协会会员单位 </p>
                        <p>★&nbsp;中国展览馆协会会员单位 </p>
                        <p>★&nbsp;国家建设领域信息化标准参制企业 </p>
                        <p>★&nbsp;ISO9001：2008 质量管理体系认证</p>
                        <p>★&nbsp;ISO14001：2004 环境管理体系认证 </p>
                        <p>★&nbsp;美国 Autodesk 正版化示范 ATC 认证单位</p>
                        <p>★&nbsp;国家高新技术企业</p>
                        <p>★&nbsp;国家双软认证企业</p>
                        <p>★&nbsp;国家重点动漫企业</p>
                    </div>
                </div>
                <div class="boxgd"></div>
                <!--专业资格认证-->
                <!--我们的分布-->
                <div class="shangshi">
                    <h1>用数字定义你的视界</h1>
                    <div class="infow" style="width: 90%; margin: 0 5%;font-size: 3.5vw; text-align: center;">立足中国深圳，布局全国核心城市，坚持不懈</br>为各行各业提供最专业的数字视觉创意与技术的</br>整体解决方案，力争成为在数字视觉科技与</br>应用领域里拥有国际影响力的中国力量。 </div>
                    <img src="../assets/images/map.jpg" style="margin-top: 0;"> </div>
                    <div class="boxgd"></div>
                    <!--我们的分布-->
                    <!--我们的客户-->
                    <div class="shangshi">
                        <h1>我们的客户</h1>
                        <h2>以下仅为部分客户展示</h2>
                        <img src="../assets/images/kehu.jpg" style="width: 96%;margin-left: 2%;"> </div>
                        <div class="boxgd"></div>
                        <!--我们的客户-->
                    </div>
                </template>
                <script>
                    export default {
                        name: "Index",
                        mounted(){
                            $('#video-play').videoOpt({
                                videoPath: require('../assets/images/video.mp4')
                            });
                        }
                    }
                </script>
                <style>
                .zizhi p {
                    font-size: 3.8vw;
                }
            </style>
