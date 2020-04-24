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

	// 查询
	router.get( "", async ( req, res ) => {
		const queryOptions = {};
		if ( req.Model.modelName === "Category" ) {
			// === vs ==
			queryOptions.populate = "parent";
		}
		const items = await req.Model.find().setOptions( queryOptions ).limit( 10 );
		res.send( items );
	} );

	// 根据 id 查询
	router.get( "/:id", async ( req, res ) => {
		const items = await req.Model.findById( req.params.id );
		res.send( items );
	} );

	// 更新
	router.put( "/:id", async ( req, res ) => {
		console.log( "update ", req );
		const model = await req.Model.findByIdAndUpdate( req.params.id, req.body );
		res.send( model );
	} );

	// 删除
	router.delete( "/:id", async ( req, res ) => {
		await req.Model.findByIdAndDelete( req.params.id, req.body );
		res.send( {
			success: true
		} );
	} );

	app.use( "/admin/api/rest/:resource", async ( req, res, next ) => {
		const modelName = require( "inflection" ).classify( req.params.resource );
		req.Model = require( `../../models/${modelName}` );
		next();
	}, router );
	// 提取中间件 处理model express里面的链式操作！ 都是中间件
	// 根据resource获取模型方法 1。视频里方法转换 2。读取model路径下文件 3.正则改
	// 给通用接口最好加一个前缀 避免以后和特殊的接口冲突
	// npm i inflection 处理单复数转换
};