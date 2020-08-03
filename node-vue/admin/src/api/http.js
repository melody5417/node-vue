import axios from 'axios'
import Vue from 'vue'
import router from '../router/router'

const http = axios.create({
  // baseURL: 'http://localhost:3000/admin/api'
  // 兼容生产和开发环境 这里需要添加环境变量文件 .env.development
  // 默认用/admin/api 和跟路径一致
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
})

// 这种实现方式比较粗暴 不好 Bearer token 需要学习
http.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 前端通用错误处理
// http的错误一般是全局处理的
// 给http的response加一个拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  console.log('error', err.response)
  if (err.response.data.message) {
    // 此处调用了 elementui 的方法，
    // 因为vue add elementui时全局使用了
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }

  // 可以约定一个状态码 或者 只要错误就跳回login页面
  if (err.response.status === 401) {
    router.push('/login')
  }

  return Promise.reject(err)
})

export default http
