// module exports 导出的是一个函数
// app 是需要的一个参数

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1/node-vue-moba', {
    useNewUrlParser: true
  })
}