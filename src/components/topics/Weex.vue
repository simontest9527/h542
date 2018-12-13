<template>
  <div class="weex">
  	<!-- 主题列表 -->
  	<topic-list :items="items"></topic-list>	
  </div>
</template>

<script>
// 引入 主题列表组件
import topicList from '@/components/topics/List'; 
// 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';

export default {
  name: 'Weex',
  data () {
    return {
      // 主题列表
      items:[]    
    }
  },
  // 钩子函数
	mounted: function () {
		// 查询 weex 数据
		getTopics({tab:'weex'}).then((response)=>{
			// 把查询的数据放到 items 
			this.items = response.data.data;
		});		
	},
  // 加载组件
  components:{
  	// 主题列表
    topicList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
