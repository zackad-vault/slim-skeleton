// webpack.config.js
var Encore = require('@symfony/webpack-encore')

Encore
    .setOutputPath('public/assets/')
    .setPublicPath('/assets')
    .addEntry('app', './assets/index.js')
    .enableSassLoader()
    .enableSourceMaps(true)
    .cleanupOutputBeforeBuild()

module.exports = Encore.getWebpackConfig()
