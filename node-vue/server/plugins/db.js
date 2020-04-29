// module exports 导出的是一个函数
// app 是需要的一个参数

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  const mongoose = require("mongoose")
  // 添加用户认证
  // /usr/local/Cellar/mongodb/4.0.3_1/bin 下 运行 ./mongo
  // > show dbs
  // admin          0.000GB
  // config         0.000GB
  // local          0.000GB
  // node-vue-moba  0.000GB
  // > use node-vue-moba
  // switched to db node-vue-moba
  // > db.createUser({user:'admin', pwd:'password', roles:['readWrite']})
  // Successfully added user: { "user" : "admin", "roles" : [ "readWrite" ] }

  mongoose.connect('mongodb://admin:password@127.0.0.1/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}