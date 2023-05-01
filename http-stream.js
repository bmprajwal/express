const http = require('http')
const fs = require('fs')
http
    .createServer((req, res) => {
        const stream = fs.createReadStream('./content/bigFile.txt')
        stream.on('data', (chunk) => {
            stream.pipe(res)
        })
        stream.on('error', (err) => {
            console.log(err)
        })
    })
    .listen(5000)
