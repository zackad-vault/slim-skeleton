var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'css/main.css'
});

var config = {
    entry: {
        app: './assets/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public/assets')
    },
    devtool: 'source-map',
    module: {
        rules: [
            /**
             * Transpile es2016 into es2015 for compatibility
             */
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            /**
             * Transpile sass into css file
             */
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            /**
             * Copy fonts file
             */
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // extract text into separate file
        extractPlugin
    ]
};

module.exports = config;
