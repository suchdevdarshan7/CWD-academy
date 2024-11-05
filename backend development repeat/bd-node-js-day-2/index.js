const http = require('http')
const fs = require('fs');

// ! Routing in node js


let output = fs.readFileSync('./output.txt', 'utf-8');

const pageNotfound = fs.readFileSync('./index.html', 'utf-8');


let products = [
    {
        id: 1,
        name: "Something"
    }
]

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end(`<h1>This is the home page of the application </h1>`)
    }
    if (request.url === '/about') {
        response.end(`<h2>This is the about page of the application</h2> `)
    }
    else if (request.url === '/products') {
        response.end(products)
    }
    else if (request.url === '/contact') {
        response.end(output)
    }
    else {
        response.end(pageNotfound)
    }
})

server.listen(3000, () => {
    console.log('The server is running in port 3000')
})

// ! request and  response objects



