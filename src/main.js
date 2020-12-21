// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局css
import '../style/global.css'

//引入axios，以及QS用来解决vue中post请求（详情）
import axios from 'axios'
import QS from 'qs';

// 调用插件
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = axios // 将axios加入原型链中
Vue.prototype.qs = QS; // 将qs加入原型链中

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
