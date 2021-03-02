const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
console.log('12231')
const {info, error}  = require('./log4js')
console.log('dfsafsaf')
app.prepare().then(() => {
    console.log('dfsafsaf')
    const server = express()
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

    server.listen(3000, (err) => {
        if (err) {
            console.log('出错', err)
            throw err
        }
        console.log('> Ready on http://localhost:3000')
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
