const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === '/'){
        res.end('Homepage')
        return
    }
    if (req.url === '/contact'){
        res.end('contact page')
        return
    }
    res.end('404! File not found')
})

server.listen(3000, () => console.log('Server running...'))