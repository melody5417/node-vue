module.exports = app => {
	const express = require( "express" );
	const router = express.Router();

	// 子路由
	const Category = require( "../../models/Category" );

	// 创建
	router.post( "/categories", async ( req, res ) => {
		const model = await Category.create( req.body );
		res.send( model );
	} );

	// 查询
	router.get( "/categories", async ( req, res ) => {
		const items = await Category.find().populate( "parent" ).limit( 10 );
		res.send( items );
	} );

	// 根据 id 查询
	router.get( "/categories/:id", async ( req, res ) => {
		console.log( req.params );
		const items = await Category.findById( req.params.id );
		res.send( items );
	} );

	// 更新
	router.put( "/categories/:id", async ( req, res ) => {
		console.log( req.params );
		const model = await Category.findByIdAndUpdate( req.params.id, req.body );
		res.send( model );
	} );

	// 删除
	router.delete( "/categories/:id", async ( req, res ) => {
		console.log( "delete", req.params );
		await Category.findByIdAndDelete( req.params.id, req.body );
		res.send( {
			success: true
		} );
	} );

	app.use( "/admin/api", router );
};