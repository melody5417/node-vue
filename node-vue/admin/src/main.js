import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router'

Vue.config.productionTip = false


// 不想污染全局作用域。这种情况下，你可以通过在原型上定义它们使其在每个 Vue 的实例中可用。
// $ 是在 Vue 所有实例中都可用的属性的一个简单约定。这样做会避免和已被定义的数据、方法、计算属性产生冲突。
import http from "./api/http"
Vue.prototype.$http = http


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
