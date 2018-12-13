<template>
  <div class="gzh">
		<h1>公众号</h1>
		<img src="../../static/images/gzh_code.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入 公共样式
  @import '../assets/sass/base.scss';
	
	.gzh{
		h1{
			text-align: center;
			line-height:rem(150px);
			color: #333;
		}
		img{
			width: 80%;
			display: block;
			margin: 0 auto;
		}

	}


</style>
