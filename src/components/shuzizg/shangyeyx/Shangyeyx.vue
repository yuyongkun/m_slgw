<template>

	<!--主体-->
	<div class="container">
		<!--关于-->
		
		<div class="sec guanyu">
			<h1>关于商业营销厅</h1>
			<h2>打造美学生活馆，助力营销最后一公里</h2>
			<p>商业营销厅，主要是为不同行业的营销而服务的展厅，往往形象与功能性并重。丝路视觉在营销展厅的整案与展项设计方面拥有丰富的经验，能够根据产品特点、场所条件以及客户的营销节点设计出有效、美观的视觉营销方式。除此之外，丝路视觉能够利用大数据与互联网的创新科技手段，打通线上下展厅，让客户与目标参观者互联，让品牌传得更远。</p>
		</div>

		<!--案例-->
		
		<div class="sec anli">
			<div class="anli-title">
				<img src="../../../assets/images/shuzizg/shangyeyx/wuxing.png" class="xing1">
				<h1>案例精选</h1>
				<img src="../../../assets/images/shuzizg/shangyeyx/wuxing.png">
				<div class="cle"></div>
			</div>
			<p>形象与功能并重，核心驱动品牌形象</p>
			
			<router-link to="/shangyeyx/case/1.html">
				<img src="../../../assets/images/shuzizg/shangyeyx/img2.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>重庆龙湖TOD展厅</h1>
						<p>龙湖地产</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>
			
			<router-link to="/shangyeyx/case/2.html">
				<img src="../../../assets/images/shuzizg/shangyeyx/img5.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>深圳湾超级总部基地展厅(瑧湾汇)</h1>
						<p>万科集团</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>	
			
			<router-link to="/shangyeyx/case/3.html">
				<img src="../../../assets/images/shuzizg/shangyeyx/img4.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>杭州保利融信大国璟展厅</h1>
						<p>保利地产</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>	
			
			
			<router-link to="/shangyeyx/case/4.html">
				<img src="../../../assets/images/shuzizg/shangyeyx/img1.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>保利和光尘樾</h1>
						<p>保利地产</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>	
			
			<router-link to="/shangyeyx/case/5.html">
				<img src="../../../assets/images/shuzizg/shangyeyx/img3.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>福田活力新都</h1>
						<p>海岸集团</p>
					</div>
					<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
					<div class="cle"></div>
				</div>
			</router-link>	
			
			
			
			<div class="anli-yin">
				<router-link to="/shangyeyx/case/6.html">
					<img src="../../../assets/images/shuzizg/shangyeyx/img7.jpg" class="anli-pic">
					<div class="anli-sum">
						<div class="anli-wenzi">
							<h1>广州金茂府品牌馆</h1>
							<p>中国金茂（集团）有限公司</p>
						</div>
						<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
						<div class="cle"></div>
					</div>
				</router-link>
				<router-link to="/shangyeyx/case/7.html">
					<img src="../../../assets/images/shuzizg/shangyeyx/img8.jpg" class="anli-pic">
					<div class="anli-sum">
						<div class="anli-wenzi">
							<h1>武汉华侨城原岸</h1>
							<p>武汉华侨城实业发展有限公司</p>
						</div>
						<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
						<div class="cle"></div>
					</div>
				</router-link>
				<router-link to="/shangyeyx/case/8.html">
					<img src="../../../assets/images/shuzizg/shangyeyx/img9.jpg" class="anli-pic">
					<div class="anli-sum">
						<div class="anli-wenzi">
							<h1>珠海星艺文创展厅</h1>
							<p>珠海横琴星艺文创天地公司</p>
						</div>
						<img class="anli-arrow" src="../../../assets/images/shuzizg/shangyeyx/arrow.jpg">
						<div class="cle"></div>
					</div>
				</router-link>
				
				<div class="btn btn-shouqi">收起更多案例</div>
			</div>
			<div class="btn btn-jiazai">加载更多案例</div>
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