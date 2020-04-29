module.exports = app => {

	const express = require( "express" );
	const router = express.Router(
		{
			mergeParams: true // 必须加 否则下一级router的req获取不到resouce
		}
	);

	// 创建
	router.post( "", async ( req, res ) => {
		const model = await req.Model.create( req.body );
		res.send( model );
	} );

	// 提取中间件
	const authMiddleware = require('./../../middleware/auth')

	// 查询列表 添加token校验 通过添加中间件实现
	// 参考文档：https://juejin.im/post/5bab739af265da0aa3593177
	router.get( "", authMiddleware(), async ( req, res ) => {
		const queryOptions = {};
		if ( req.Model.modelName === "Category" ) {
			// === vs ==
			queryOptions.populate = "parent";
		}
		const items = await req.Model.find().setOptions( queryOptions ).limit( 10 );
		res.send( items );
	} );

	// 根据 id 查询
	router.get( "/:id", authMiddleware(), async ( req, res ) => {
		const items = await req.Model.findById( req.params.id );
		res.send( items );
	} );

	// 更新
	router.put( "/:id", authMiddleware(), async ( req, res ) => {
		console.log( "update ", req );
		const model = await req.Model.findByIdAndUpdate( req.params.id, req.body );
		res.send( model );
	} );

	// 删除
	router.delete( "/:id", authMiddleware(), async ( req, res ) => {
		await req.Model.findByIdAndDelete( req.params.id, req.body );
		res.send( {
			success: true
		})
	} );

	// 中间件
	app.use( "/admin/api/rest/:resource", async ( req, res, next ) => {
		const modelName = require( "inflection" ).classify( req.params.resource );
		req.Model = require( `../../models/${modelName}` );
		next();
	}, router );
	// 提取中间件 处理model express里面的链式操作！ 都是中间件
	// 根据resource获取模型方法 1。视频里方法转换 2。读取model路径下文件 3.正则改
	// 给通用接口最好加一个前缀 避免以后和特殊的接口冲突
	// npm i inflection 处理单复数转换

	// 错误处理函数
	app.use(async (err, req, res, next) => {
		if (err.statusCode) {
			res.status(err.statusCode).send({
				message: err.message
			})	
		} else {
			res.status(500).send({
				message: err.message
			})
		}
	})
};