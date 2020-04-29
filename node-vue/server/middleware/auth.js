// 要写成函数 这样才可以配置 
// 参数可用可不用 习惯性加上options 让其可以配置
module.exports = options => {

    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')
    
    return async (req, res, next) => {
		// || 空字符串 是一种保护措施
		// 注意authorization小写 前端都大写 后端都小写
		const token = String(req.headers.authorization || '').split(' ').pop()
		assert(token, 401, '请先登录')

		// id<->token
		const { id } = jwt.verify(token, req.app.get('secret'))
		assert(id, 401, '请先登录')

		// const user = require(user).findById(id)
		// 此处将user挂在到req上去 之后才可以继续访问
		req.user = await AdminUser.findById(id)
		assert(req.user, 401, '请先登录')

		await next()
	}
}