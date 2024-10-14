const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.end('<h1>I am the home page</h1>')
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.end('<h1>I am the about page</h1>')
    }
    else if (req.url === '/form' && req.method === 'POST') {
        res.end('<h1> Data recieved </h1>')
    }
    else {
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(3000, () => {
    console.log('The server is running in port 3000')
})