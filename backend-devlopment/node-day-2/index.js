const http = require('http');
const fs = require('fs');

let aboutHtml = fs.readFileSync('./views/about.html', 'utf-8');

let detailsHtml = fs.readFileSync('./views/details.html', 'utf-8');

let courses = [
    {
        id: 1,
        course: "Javascript for beginners",
        price: 12000
    },
    {
        id: 2,
        course: "Advanced Javascript ",
        price: 20000,
    },
    {
        id: 3,
        course: "React js and nextjs mastery course",
        price: 25000
    }

]

const jsonCourse = JSON.stringify(courses)

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end(aboutHtml)
    }
    else if (req.url === '/details') {
        res.end(detailsHtml);
    }
    else if (req.url === '/courses') {
        res.end(jsonCourse)
    }
    else {
        res.end('Page not found 404 by darshan')
    }
})



server.listen(3000, () => {
    console.log('The server is running in port 3000')
})