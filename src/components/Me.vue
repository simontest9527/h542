<template>
  <div class="me">
		<h1>轮播图</h1>
		<div class="play">
		  <!-- Swiper -->
		  <div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">
		      	<img src="../../static/images/p1.jpg" alt="">
		      </div>
		      <div class="swiper-slide">
		      	<img src="../../static/images/p2.jpg" alt="">
		      </div>
		      <div class="swiper-slide">
		      	<img src="../../static/images/p3.jpg" alt="">
		      </div>
		      <div class="swiper-slide">
		      	<img src="../../static/images/p4.jpg" alt="">
		      </div>
		      <div class="swiper-slide">
		      	<img src="../../static/images/p5.jpg" alt="">
		      </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination"></div>
		  </div>
		</div>
  </div>
</template>

<script>
// 引入swiper 组件
import Swiper from 'swiper';
import "swiper/dist/css/swiper.min.css";
export default {
  name: 'Me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数
  mounted: function () {
  	// 实例化 swiper
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
  // 引入 公共样式
  @import '../assets/sass/base.scss';
	
	.me{
		h1{
			text-align: center;
			line-height: rem(150px);
		}
		.play{
			margin-top: rem(20px);
			.swiper-container{
				img{
					width: 100%;
				}
			}
		}
	}


</style>
