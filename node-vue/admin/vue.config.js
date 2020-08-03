const config = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
      // https://blog.csdn.net/weixin_41786576/article/details/83745702
      // 如果你想自动化导入文件 (用于颜色、变量、mixin……)，你可以使用 style-resources-loader
    }
  },
  // 打包后输出的文件夹
  outputDir: __dirname + '/../server/public/admin',
  // 指定打包后路径
  publicPath: process.env.MODE_ENV === 'production' 
  ? '/admin/' 
  : '/'
}

console.log(process.env.MODE_ENV)

module.exports = config
