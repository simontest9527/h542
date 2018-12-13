import Vue from 'vue'
import App from './App'
import router from './router'

// 引入懒加载 组件
import VueLazyload from 'vue-lazyload'
// 懒加载 配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 当你的图片请求失败，就会用这里的图片代替
  error: require('../static/images/touxiang.png'),
  // 当你的图片正在请求的时候，就用这里的图片代替
  loading: require('../static/images/txLoading.gif'),
  attempt: 1
})




Vue.config.productionTip = false

/* 实例化 vue*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
