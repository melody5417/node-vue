import Vue from 'vue'
import http from './api/http'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router'

Vue.config.productionTip = false

// 不想污染全局作用域。
// 这种情况下，你可以通过在原型上定义它们使其在每个 Vue 的实例中可用。
// $ 是在 Vue 所有实例中都可用的属性的一个简单约定。
// 这样做会避免和已被定义的数据、方法、计算属性产生冲突。
// https://cn.vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.prototype.$http = http

// 上传图片没有走axios token没有添加上
// 所以在这里全局混入代码块 在每个实例里都可以调用了
// 应用案例见 ItemEdit.vue
Vue.mixin({
  computed: {
    uploadUrl () {
      return $http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    // 用method比data好 可以实时取值
    getAuthHeaders () {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
