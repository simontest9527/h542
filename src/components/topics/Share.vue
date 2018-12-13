<template>
  <div class="share">
    <!-- 主题列表 -->
    <topic-list :items="items"></topic-list>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
// 引入 主题列表组件
import topicList from '@/components/topics/List'; 
export default {
  name: 'Share',
  data () {
    return {
      // 主题列表
      items:[]
    }
  },
  // 钩子函数
	mounted: function () {
		// ES6 
		getTopics({tab:'share'}).then((response)=>{
			this.items = response.data.data;
		});		
	},
  // 加载组件
  components:{
    topicList
  }



}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
