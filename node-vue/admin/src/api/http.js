import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 前端通用错误处理
// http的错误一般是全局处理的
// 给http的response加一个拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    // 此处调用了 elementui 的方法，
    // 因为vue add elementui时全局使用了
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }

  return Promise.reject(err)
})

export default http
