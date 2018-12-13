<template>

		<!--主体-->
		<div class="container">

			<!--关于-->

			<div class="sec guanyu">
				<h1>关于云渲染</h1>
				<h2>创造视觉处理的降维打击能力</br>推动3D大时代的变奏曲</h2>
				<p>云渲染作为云计算的一种，本质是将3D程序放在远程的服务器中渲染，用户终端发出指令，服务器根据指令执行对应的渲染任务，而渲染结果画面则被传送回用户终端中加以显示。云渲染模式意味着全球使用者可以在同一个计算集群中共同分享资源、完成协作，成本大幅降低的同时可实现高品质CG处理能力的提升。</p>
			</div>

			<!--案例-->

			<div class="sec anli">
				<div class="anli-title">
					<img src="../../../assets/images/chuangxin/yunxuanran/wuxing.png" class="xing1">
					<h1>案例精选</h1>
					<img src="../../../assets/images/chuangxin/yunxuanran/wuxing.png">
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img1.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《影》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img2.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《狄仁杰之四大天王》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img3.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《战狼2》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img4.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《扶摇》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img5.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《唐人街探案2》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<img src="../../../assets/images/chuangxin/yunxuanran/img6.jpg" class="anli-pic">
				<div class="anli-sum">
					<div class="anli-wenzi">
						<h1>《大圣归来》</h1>
					</div>
					<div class="cle"></div>
				</div>
				<div class="anli-yin">
					<img src="../../../assets/images/chuangxin/yunxuanran/img7.jpg" class="anli-pic">
					<div class="anli-sum">
						<div class="anli-wenzi">
							<h1>《巴霍巴利王》</h1>
						</div>
						<div class="cle"></div>
					</div>
					<img src="../../../assets/images/chuangxin/yunxuanran/img8.jpg" class="anli-pic">
					<div class="anli-sum">
						<div class="anli-wenzi">
							<h1>《爵迹》</h1>
							<p></p>
						</div>
						<div class="cle"></div>
					</div>

					<div class="btn btn-shouqi">收起更多案例</div>
				</div>
				<div class="btn btn-jiazai">加载更多案例</div>

			</div>

			<!--实力-->
			<div class="sec shili">
				<h1>我们的实力</h1>
				<p>瑞云——中国“自助式云渲染”的开创者</br>亚洲领先的云渲染农场</p>
				<div style="text-align: center;">
					<img src="../../../assets/images/chuangxin/yunxuanran/ditu.jpg" alt="" style="width: 90%;">
				</div>
			</div>
			 <site-map></site-map>
		</div>
     
</template>
      <script>
        $(".anli-yin").hide();
        $(".btn-jiazai").click(function() {
          $(".anli-yin").show();
          $(".btn-jiazai").hide();
        });
        $(".btn-shouqi").click(function() {
          $(".anli-yin").hide();
          $(".btn-jiazai").show();
        });
      </script>