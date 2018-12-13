<template>
  <div class="good">
    <topic-list :items="items"></topic-list>
    <!-- 上下滑动的组件 -->
    <infinite-loading v-if="isShow" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// 引入 主题列表组件
import topicList from '@/components/topics/List'; 
// 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
// 引入 分页滑动组件
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'Good',
  data () {
    return {
      // 主题列表
      items:[],
      page:1,
      // loading 图标是否显示
      isShow:true
    }
  },

  // 钩子函数
  mounted: function () { 
    getTopics({tab:'good'}).then((response)=>{
      console.log(response);
      this.items = response.data.data;
    })
  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        // 查询 全部主题数据
        getTopics({tab:'good',limit:25,page:++this.page}).then((response)=>{
          console.log(response.data.data);
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

  .good{
    margin-top: rem(90px);
    margin-bottom: rem(130px);
  }  
</style>