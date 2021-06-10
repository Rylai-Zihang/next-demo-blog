// module.exports = {
//     webpack: (config, options) => {
//         config.module.rules.push({
//             test: /\.(png|gif|jpg|jpeg)$/,
//             use: [
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[name].[contenthash].[ext]',
//                         outputPath: 'static',
//                         publicPath: '/_next/static'
//                     }
//                 }
//             ]
//         })
//         return config
//     }
//
// }

const withImages = require('next-images')
module.exports  = withImages({
    webpack(config, options) {
        return config
    }
})