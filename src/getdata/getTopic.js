// 取 主题相关数据



// 引入 axios 模块（封装的 ajax）
import axios from 'axios';

var $http = axios.create({
	// 基本的url
  baseURL: 'https://www.vue-js.com/api/v1',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 请求主题列表的方法
function getTopics(options){
	// 默认参数
	var newsOpitons = Object.assign({
		tab:'all',
		limit:20,
		page:1,
	},options);

	return $http({
		url:'/topics',
		// 参数
		params:newsOpitons,
	});
}


// 请求主题详细信息
function getTopicData(id){
	return $http.get('/topic/'+id);
}


// 暴露取数据的
export {getTopics,getTopicData}