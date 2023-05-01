const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('404 File not found')
        res.end()
    }
})

server.listen(5000)