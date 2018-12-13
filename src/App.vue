<template>
  <div id="app">

 <!--    <p>{{resPath}}</p>
    <h3>{{$route.path}}</h3> -->

    <router-view/>
    <!-- 底部导航 -->
    <nav class="footer">
      <ul>
        <router-link to="/" tag="li" :class="resPath=='index'?'mo':''">
          <span class="iconfont icon-homepage"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/gzh" tag="li" :class="resPath=='gzh'?'mo':''">
          <span class="iconfont icon-qrcode"></span>
          <p>公众号</p>
        </router-link>
        <router-link to="/me" tag="li" :class="resPath=='me'?'mo':''">
          <span class="iconfont icon-addressbook"></span>
          <p>我们</p>
        </router-link> 
      </ul>      
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath:function(){
      var arr = this.$route.path.split('/');
      return arr[1];
    }
  }
}
</script>

<style lang="scss">
  // 引入 公共样式
  @import './assets/sass/base.scss';

  // 底部导航
  nav.footer{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: rem(120px);
    background: #315f36;
    ul{
      display: flex;
      
      li{
        width: 33.33%;
        height:rem(120px);
        color:#fff;
        font-weight: bold;
        span{
          display: block;
          font-size: rem(70px);
          text-align: center;
        }
        p{
          text-align: center;
          font-size: rem(30px);
          line-height: rem(30px);
        }
        &.mo{
           background:#333;
           color:pink;
        }
      }
    }
  }



</style>
