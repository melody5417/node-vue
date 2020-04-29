module.exports = app => {
    const assert = require('http-assert')

    app.post('/admin/api/login', async (req, res) => {
        // 解构赋值，简化步骤
        const { username, password} = req.body
        console.log('username: password:', username, password)

        // 1. 根据用户名找用户

        const AdminUser = require('../../models/AdminUser')
        // 此处 + 强制选择， 因为model里设置了默认排除
        // 前缀 - 强制排除， 前缀 + 强制选择
        const user = await AdminUser.findOne({
            username: username  // 简写方式 username
        }).select('+password')
        console.log('user:', user)

        // if (!user) {
        //     // 设定状态码
        //     return res.status(422).send({
        //         message: '用户不存在'
        //     })
        // }

        // 这里要判断是否有user 然后又要报错，反复报错 这里有依赖可以优化
		// http-assert
        assert(user, 422, '用户不存在')
        console.log('user', user)

        // 2. 校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        assert(isValid, 422, '密码错误')

        // 3. 返回token
        // 常用 web token 验证库： jsonwebtoken
        const jwt = require('jsonwebtoken')
        // 此处 app.get 和 路由里的app.get冲突了，就靠参数的个数决定
        // app.get获取全局变量
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({token})
    })

    // 错误处理函数
	app.use(async (err, req, res, next) => {
		res.status(err.statusCode).send({
			message: err.message
		})
	})
}