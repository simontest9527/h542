<template>
  <div class="all">
    <!-- 主题列表 -->
    <topic-list :items="items"></topic-list>
    <!-- 上下滑动的组件 -->
    <infinite-loading v-if="isShow" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
// 引入 主题列表组件
import topicList from '@/components/topics/List'; 
// 引入 分页滑动组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'All',
  data () {
    return {
      // 主题列表数据
      items:[],
      // 默认显示 第一页
      page:1,
      isShow:true
    }
  },
  // 钩子函数
  mounted: function () {
    // 查询 全部主题数据
    getTopics({tab:'all',limit:20,page:this.page}).then((response)=>{
      // 把查询到的数据放到 items里
      this.items = response.data.data;
    });

  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        // 查询 全部主题数据
        getTopics({tab:'all',limit:25,page:++this.page}).then((response)=>{
          // 把查询到的数据放到 items里
          this.items = this.items.concat(response.data.data);
          // 判断下一页，还有没有数据
          if(response.data.data.length ==0){
            this.isShow = false;
            // 结束了
            return;
          }          
          // 再次调用请求的函数
          $state.loaded();
        });
      }, 500);
    },
  },
  // 加载组件
  components:{
    // 主题列表组件
    topicList,InfiniteLoading
  }
}
</script>

<style scoped lang="scss">
  // 引入 公共样式
  @import '../../assets/sass/base.scss';

  .all{
    margin-top: rem(90px);
    margin-bottom: rem(130px);
  }  
</style>
