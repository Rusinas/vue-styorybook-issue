module.exports = {
    stories: ['../src/stories/*.js'],
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.sass$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.pug$/,
            use: ['pug-plain-loader']
        })

        return config
    }
}