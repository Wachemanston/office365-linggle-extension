const path = require('path');

const config = {
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/env', {
                                        modules: false,
                                    },
                                ],
                            ],
                            plugins: ['transform-object-rest-spread'],
                        },
                    },
                ],
            },
        ],
    },
};

const wordAddin = Object.assign({}, config, {
    entry: {
        index: './wordaddin/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'wordaddin'),
        filename: '[name].bundle.js',
    },
});

module.exports = [wordAddin];
