const express = require('express')

const app = express()

// 跨域模块 报跨域访问错误 把使用cors提前到路由模块解决
app.use(require('cors')())
app.use(express.json())

require('./routes/admin')(app) // app传参
require('./plugins/db')(app)

app.listen(8080, () => {
  console.log(' http://localhost:8080/ ')
})