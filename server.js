#! /usr/bin/env node

// 1. 获取express
let express = require('express')
let history = require('connect-history-api-fallback')
// 2. 获得route对象
let router = express.Router()
// 3. 获得app对象
let app = express()

// 4. 装配route对象
app.use('/testapi', router)
app.use(history())

// 5. 启动web服务
let port = 3000
app.listen(port)
console.log(`端口号： ${port}`)

let dbfile = process.argv[2]

// 配置路由
let appData = require(dbfile)
app.get('*', (req, res) => {
  res.send(appData)
})
