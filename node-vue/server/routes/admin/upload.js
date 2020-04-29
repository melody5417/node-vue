// express 本身获取不到上传文件的数据，需要中间件专门处理上传数据
// npm i multer
// 安装插件一定要明确是安装在哪个路径下
module.exports = app => {
  const express = require('express')
  const router = express.Router()

  // 提取中间件
	const authMiddleware = require('./../../middleware/auth')

  const multer = require('multer')
  // __dirname 绝对路径
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload', authMiddleware(), upload.single('file') , (req, res) => {
    // req本身是没有file的，但是用了upload中间件，会在req上加一个file
    const file = req.file
    console.log('file: ', file)
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}