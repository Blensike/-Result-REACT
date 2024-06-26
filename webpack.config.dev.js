const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer:{
    port: 228,
    hot: true,
    open: false,
  }
});
