const express = require('express')
const app = express()

// 跨域模块 报跨域访问错误 把使用cors提前到路由模块解决
app.use(require('cors')())
app.use(express.json())

// 路由
require('./routes/admin')(app) // app传参

// 连接数据库
require('./plugins/db')(app)

// 测试代码
// http://localhost:8080/testGET?param1=get1&param2=get2
app.get('/testGET', function (req, res) {
  console.log("path: ", req.path);
  console.log("query: ", req.query);
  console.log("body: ", req.body);
  console.log("cookies", req.cookies);
  res.send('Hello World');
})

// 测试代码
app.post('/testPost?param=post', function (req, res) {
  console.log("path: ", req.path);
  console.log("query: ", req.query);
  res.send('Hello World');
})

// admin前端是8080
const server = app.listen(3000, () => {
  console.log("应用实例，访问地址为%@", server.address())
})