const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  parent: {type: mongoose.SchemaTypes.ObjectID, ref: 'Category'},  // 注意 属性是ID 关联模型是 Category
})

module.exports = mongoose.model('Category', schema)
