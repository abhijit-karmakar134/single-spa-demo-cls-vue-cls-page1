const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // various other settings such as publicPath, etc
  // ...
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
}