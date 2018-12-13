<template>
  <div class="show">
  	<h2 class="title">{{title}}</h2>
    <p class="author">{{author}}</p>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopicData} from '@/getdata/getTopic.js';

export default {
  name: 'Show',
  data () {
    return {
      //数据
      // data:[],
      // 文章标题
      title:'',
      author:'',
      content:''
    }
  },
  // 方法
  mounted:function(){
  	// 文章的id
  	var id = this.$route.params.id;
  	getTopicData(id).then((response)=>{
      this.title = response.data.data.title;
      this.author = response.data.data.author.loginname;
      this.content = response.data.data.content;
 	 	})
  }
}
</script>

<style scoped lang="scss">
	// 引入 公共样式
  @import '../../assets/sass/base.scss';
  .show{
  	margin-top: rem(150px);
    .title{
      text-align: center;
      color: green;
    }

    .content{
      /deep/ .markdown-text{
        p{color:red;}
      }
    }
  }

  
</style>
