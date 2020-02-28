const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  avatar: {type: String},
  title: {type: String},
  // 1对多 1个英雄可能对应多个分类
  categories: [{type: mongoose.SchemaTypes.ObjectID, ref: 'Category'}],
  // 定义复合类型
  scores: {
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survive: {type: Number}
  },
  skills: [{
    icon: {type: String},
    name: {type: String},
    desc: {type: String},
    tips: {type: String}
  }],
  // 顺风出装
  items1: [{type: mongoose.SchemaTypes.ObjectID, ref: 'Item'}],
  // 逆风出装
  items2: [{type: mongoose.SchemaTypes.ObjectID, ref: 'Item'}],
  // 使用技巧
  usageTips: {type: String},
  // 对抗技巧
  battleTips: {type: String},
  teamTips: {type: String},
  // 搭档
  partners: [{
    hero: {type: mongoose.SchemaTypes.ObjectID, ref: 'Hero'},
    desc: {type: String}
  }]
})

module.exports = mongoose.model('Hero', schema)
