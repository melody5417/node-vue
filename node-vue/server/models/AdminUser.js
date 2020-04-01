const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,  // 设置无法查询 密码一般都是设置 无法查询
    set(val) {
      // 加密后密码
      // npm i bcrypt --save 此处如果bcrypt安装失败 可以安装bcryptjs
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)
