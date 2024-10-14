const { createServer } = require('http')

const server = createServer((req, res) => {

    if (req.url === '/') {
        res.end('<h1>This is an html</h1>')
    }
})

server.listen(3000, () => {
    console.log(`The server is running in port 3000`)
})