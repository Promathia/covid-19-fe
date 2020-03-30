const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: '[name].[hash:8].js'
    },
    module : {
        rules : [
            { test : /\.(js)$/, use:'babel-loader' },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
        ]
    },
    mode:'production',
    watch: false,
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/static/index.html'
        })
    ]
};
