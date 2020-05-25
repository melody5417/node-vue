import Vue from 'vue'
import App from './App.vue'
// 引用css文件都是在js中
// $  npm i -D sass sass-loader
// css->scss好处：写嵌套更方便
import './assets/css/common.scss'
import './assets/css/reset.scss'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
