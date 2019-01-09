const Mock = require('./mock/index.js');
const path = require('path');

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get(/^\/API[\s\S]*/, (req, res) => {
        res.json(Mock.MockGet(req));
      });
      app.post(/^\/API[\s\S]*/, (req, res) => {
        res.json(Mock.MockPost(req, res));
      });
    },
  },
  productionSourceMap: process.env.NODE_ENV !== 'production', //false, //打包是加入，可以删除不必哟的map文件
  // configureWebpack: {   //设置别名
  //   resolve: {
  //     alias: {
  //       "@S": "@/store/"
  //     }
  //   }
  // }
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    );
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/reset.less'), // 需要全局导入的less
      ],
    });
}
