<template>
	<!--主体-->
	<div class="container">
		<!--关于-->
		<div class="sec guanyu">
			<h1>关于效果图</h1>
			<h2>三维化平面图纸，高仿真生动展示方案</h2>
			<p>效果图，主要是将平面的图纸三维化、仿真化，通过制作高仿真的虚拟图片，来检查设计方案的细微瑕疵或进行项目方案修改的推敲，由于其拥有节约时间、材料成本和最大限度模拟现实的优势，已成为现代设计行业中最为普遍的交流“工具”。</p>
		</div>
		<!--案例-->
		<div class="sec anli">
			<div class="anli-title">
				<img src="../../../assets/images/shejiksh/xiaoguotu/wuxing.png" class="xing1">
				<h1>案例精选</h1>
				<img src="../../../assets/images/shejiksh/xiaoguotu/wuxing.png">
				<div class="cle"></div>
			</div>
			<p>严格把控项目制作，源自对作品的匠心追求</p>

			<router-link to="/xiaoguotu/case/1.html">
				<img src="../../../assets/images/shejiksh/xiaoguotu/img1.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>马来西亚高铁项目</h1>
						<p>MyHSR Corp team， VERITAS and Ong & Ong， Systra S.A.， Jacobs Engineering Services Sdn. Bhd</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/xiaoguotu/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/xiaoguotu/case/2.html">
				<img src="../../../assets/images/shejiksh/xiaoguotu/img2.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>台中银行项目</h1>
						<p>Aedas Limited</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/xiaoguotu/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/xiaoguotu/case/3.html">
				<img src="../../../assets/images/shejiksh/xiaoguotu/img3.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>千岛湖顾家酒店</h1>
						<p>泛太</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/xiaoguotu/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/xiaoguotu/case/4.html">
				<img src="../../../assets/images/shejiksh/xiaoguotu/img4.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>武汉汉正街改造升级项目</h1>
						<p>Aedas Limited</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/xiaoguotu/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>


			<router-link to="/xiaoguotu/case/5.html">
				<img src="../../../assets/images/shejiksh/xiaoguotu/img5.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>珠海横琴科学城一期</h1>
						<p>Aedas Limited</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shejiksh/xiaoguotu/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>
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