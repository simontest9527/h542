<template>
  <div class="job">
    <topic-list :items="items"></topic-list>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
// 引入 主题列表组件
import topicList from '@/components/topics/List'; 

export default {
  name: 'Job',
  data () {
    return {
      // 主题列表
      items:[],
    }
  },
  // 钩子函数
	mounted: function () { 
    getTopics({tab:'job'}).then((response)=>{
      console.log(response);
      this.items = response.data.data;
    })
	},
  // 加载组件
  components:{
    topicList
  }


}
</script>

<style scoped lang="scss">

</style>
