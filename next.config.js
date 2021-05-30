// const withCss = require('@zeit/next-css');

// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = () => {};
// }

// module.exports = withCss({
//   compress: false,
//   devIndicators: {
//     autoPrerender: false,
//   },
//   onDemandEntries: {
//     // period (in ms) where the server will keep pages in the buffer
//     maxInactiveAge: 25 * 1000,
//     // number of pages that should be kept simultaneously without being disposed
//     pagesBufferLength: 2,
//   },
//   reactStrictMode: true,
// });
module.exports ={
  compress: false,
  devIndicators: {
    autoPrerender: false,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  reactStrictMode: true,
  webpack:(config)=>{
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // img 路径名称.hash.ext
              // 比如 1.png 路径名称为
              // _next/static/1.29fef1d3301a37127e326ea4c1543df5.png
              name: '[name].[contenthash].[ext]',
              // 硬盘路径
              outputPath: 'static',
              // 网站路径是
              publicPath: '_next/static'
            }
          }
        ]
      });
    return config;
  }
};