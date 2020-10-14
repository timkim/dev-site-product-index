const merge = require("webpack-merge")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  function getOutput() {
    switch (stage) {
      case `develop`:
        return {
          filename: `apis-asset/[id].js`,
        }
      case `build-javascript`:
        return {
          filename: `apis-asset/[contenthash].js`,
          chunkFilename: `apis-asset/[contenthash].js`,
        }
    }
  }
  actions.replaceWebpackConfig(merge(getConfig(), { output: getOutput() }))
}
