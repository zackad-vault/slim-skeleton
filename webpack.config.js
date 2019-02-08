// webpack.config.js
var Encore = require('@symfony/webpack-encore')

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/index.js')
    .enableSassLoader()
    .enableSourceMaps(true)
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()

module.exports = Encore.getWebpackConfig()
