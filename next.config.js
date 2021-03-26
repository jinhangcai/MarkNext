const isProd = process.env.NODE_ENV === 'production'
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// module.exports = {
//     // Use the CDN in production and localhost for development.
//     assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
// }

module.exports = (phase, { defaultConfig }) => {
    console.log('phase', phase)
    // if (phase === PHASE_DEVELOPMENT_SERVER) {
    //     return {
    //         env: {
    //             PROXY_ENV: 'dev',
    //         },
    //         withSass: withSass(withCSS({}))
    //         // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',  //  支持静态cdn托管
    //         // basePath: '/docs',  // 允许您为应用程序设置路径前缀
    //     }
    // }
    return {
        env: {
            PROXY_ENV: phase === PHASE_DEVELOPMENT_SERVER ?'dev' : '',
        },
        withSass: withSass(withCSS({})),
        // webpack: (config, options) => {
        //
        // },
        devIndicators: {
            autoPrerender: false
        },
        generateEtags: false,
        distDir: 'build',  // 自定义打包输出文件
        compress: true, // Next.js提供gzip压缩来压缩渲染的内容和静态文件  一般通过nginx来做gzip压缩
        generateBuildId: async () => {
            // next build在每台服务器上运行时，这可能会在多服务器部署中引起问题。为了在各个构建之间保留静态的构建ID，您可以提供自己的构建ID。
            // You can, for example, get the latest git commit hash here
            return 'my-build-id'
        },
        typescript: {
            // !! WARN !!
            // Dangerously allow production builds to successfully complete even if
            // your project has type errors.
            // !! WARN !!
            ignoreBuildErrors: true,
        },
        /* config options for all phases except development here */
    }
}
