<template>

	<!--主体-->
	<div class="container">

		<!--关于-->
		
		<div class="sec guanyu">
			<h1>关于多媒体视频</h1>
			<h2>全面性展示方案细节，系统化把控项目预算</h2>
			<p>随着社会的不断发展，设计行业的要求也在不断提高，即通过动画、文字、音频、特效等计算机三维动画技术，将设计方案中的设计理念、各阶段设计图纸、最终展现效果等细节提前展现出来，以达到对最终设计效果的完美把控。由于其在视觉传达上的精确性、真实性和无限可操作性，多媒体方案视频越来越受到各个行业的青睐。</p>
		</div>

		<!--案例-->
		
		<div class="sec anli">
			<div class="anli-title">
				<img src="../../../assets/images/shejiksh/duomeitsp/wuxing.png" class="xing1">
				<h1>案例精选</h1>
				<img src="../../../assets/images/shejiksh/duomeitsp/wuxing.png">
				<div class="cle"></div>
			</div>
			<p>用最直接的视觉语言，描述巧夺天工的设计灵感</p>
			
			<router-link to="/duomeitsp/case/1.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img1.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>中德教育合作示范基地</h1>
						<p>深圳院</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>



			<router-link to="/duomeitsp/case/2.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img2.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>浦东新区新场镇16号线核心单元</br>城市设计</h1>
						<p>AECOM广州分公司</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/duomeitsp/case/3.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img3.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>广西贺州市梦里黄姚文化旅游创意城</br>策划及总体概念规划</h1>
						<p>GVL怡境景观</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/duomeitsp/case/4.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img4.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>涿州松林店 时代智能创新区</h1>
						<p>北京清华同衡规划设计研究院有限公司</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/duomeitsp/case/5.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img5.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>国际大健康驿站</h1>
						<p>秦皇岛中民投资有限公司</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/duomeitsp/case/6.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img6.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>中国建筑地铁上盖项目</h1>
						<p>中国建筑</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>



			<router-link to="/duomeitsp/case/7.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img7.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>nano纱窗滤网</h1>
						<p>冠准科技环保有限公司</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/duomeitsp/case/8.html">
				<img src="../../../assets/images/shejiksh/duomeitsp/img8.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>玻璃幕墙项目</h1>
						<p>合肥新视野</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/duomeitsp/arrow.jpg">
					<div class="cle"></div>
				</div></router-link>
			</div>
			

			<site-map></site-map>
		</div>
	</template>
	<script>
		export default {
			mounted() {
				$(".anli-yin").hide();
				$(".btn-shouqi").hide();
				$(".btn-jiazai").click(function() {
					$(".anli-yin").show();
					$(".btn-shouqi").show();
					$(".btn-jiazai").hide();
				});
				$(".btn-shouqi").click(function() {
					$(".anli-yin").hide();
					$(".btn-shouqi").hide();
					$(".btn-jiazai").show();
				});
			}
		}

	</script>
	

