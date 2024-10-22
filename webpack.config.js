const path = require('path');

module.exports = {
    mode: 'development',  
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //new
            include: /icons/, 
            //
            type: 'asset/resource',
          },
          //new for inline svg
          {
            test: /\.svg$/i,
            include: /inline-svg/,
            use: 'svg-inline-loader'
          },
          //
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
           },
        ],
      },
};