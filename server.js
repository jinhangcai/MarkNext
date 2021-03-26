const express = require('express')
const next = require('next')
const http = require('http')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { createProxyMiddleware  } = require('http-proxy-middleware')
const {info, error}  = require('./log4js')
const devProxy = {
    '/api': {
        target: 'http://gateway.test.mistong.com', // 端口自己配置合适的
        pathRewrite: {
            '^/api': ''
        },
        changeOrigin: true
    }
}
app.prepare().then(() => {
    const server = express();
    // server.set('port', 3000);
    if (dev) {
        Object.keys(devProxy).forEach(function(context) {
            server.use(createProxyMiddleware(context, devProxy[context]))
        })
    }
    console.log('进入express')
    // server.get('/p/:id', (req, res) => {
    //     const actualPage = '/post'
    //     const queryParams = {
    //         title: req.params.id
    //     }
    //     app.render(req, res, actualPage, queryParams)
    // })
    //
    server.use('*', function (req, res, next) {
        // console.log('express', req)
        try {
            // info('请求成功', req)
        } catch (e) {
            // error('请求失败', req, e)
        }
        next()
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(80, (err) => {
        if (err) {
            console.log('出错', err)
            throw err
        }
        console.log('> Ready on http://local.mistong.com:80')
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
