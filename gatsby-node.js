const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@sections"  : path.resolve(__dirname, "src/sections"),
        "@content"   : path.resolve(__dirname, "src/content"),
        "@images"    : path.resolve(__dirname, "src/images")
      }
    }
  })
}
