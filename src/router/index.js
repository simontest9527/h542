import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Index from '@/components/Index'
import Gzh from '@/components/Gzh'
import Me from '@/components/Me'

// 引入主题相关的组件
import All from '@/components/topics/All'
import Ask from '@/components/topics/Ask'
import Good from '@/components/topics/Good'
import Job from '@/components/topics/Job'
import Share from '@/components/topics/Share'
import Weex from '@/components/topics/Weex'
// 引入 主题 详情组件
import Show from '@/components/topics/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          component:All
        },
        {
          path: 'good',
          component:Good
        },
        {
          path: 'weex',
          component:Weex
        },
        {
          path: 'share',
          component:Share
        },
        {
          path: 'ask',
          component:Ask
        },
        {
          path: 'job',
          component:Job
        },
        {
          path:'show/:id',
          component:Show
        }
      ]
    },
    {
   		path: '/gzh',
   		name: 'Gzh',
   		component: Gzh
    },
    {
   		path: '/me',
   		name: 'Me',
   		component: Me
    },
    // 路由跳转
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
