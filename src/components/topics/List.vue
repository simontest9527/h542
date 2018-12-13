<template>
  <div class="list">
    <!-- loading 的组件 -->
    <loading v-if="!items.length"></loading>
    <!-- 主题列表 -->
    <ul class="items">
      <li class="item" v-for="item in items">
        <img v-lazy="item.author.avatar_url" alt="">
        <div class="tab">
          <div class="mo" v-if="item.top">置顶</div>
          <div class="mo" v-else-if="item.good">精华</div>
          <div v-else>{{tabs[item.tab]}}</div>
        </div>
        <router-link :to="'/index/show/'+item.id" tag="div" class="title">
          {{item.title}}
        </router-link>
      </li>
    </ul>
    <!-- 主题列表 end -->
  </div>
</template>

<script>
// 引入 Loading 组件
import loading from '@/components/Loading'; 
export default {
  name: 'HelloWorld',
  data () {
    return {
      // 主题分类
      tabs:{
        weex:'Weex',
        ask:'问答',
        job:'招聘',
        share:'分享'
      }
    }
  },
  props:['items'],
  // 加载组件
  components:{
    // loading 组件
    loading
  }
}
</script>

<style scoped lang="scss">
  // 引入 公共样式
  @import '../../assets/sass/base.scss';
  // // 引入 主题列表样式
  @import '../../assets/sass/itemlist.scss';

  

</style>
