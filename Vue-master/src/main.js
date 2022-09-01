// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由的配置文件routes.js
import Routes from './routes'

Vue.config.productionTip = false
// 使用声明
Vue.use(VueRouter)

// 创建路由
const router = new VueRouter({
	routes:Routes,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})

import { registerMicroApps, start } from 'qiankun';
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)
registerMicroApps(
	[
	  {
	    name: 'contractCenterApps',
	    entry: '//localhost:7777',  //本地开发
			// entry: '/manager/subapps/contractCenter/',  //线上部署
	    container: '#contractCenter',
	    activeRule: getActiveRule('#/contractCenter'),
			    props: { a: 1 }	// 传递的值（可选）
	  }
	], {
	beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]}
);

// 启动 qiankun
start({
  prefetch: false // 取消预加载
});
