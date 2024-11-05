const { createServer } = require("http");
const cors = require('cors')



const products = [
    {
        id: 1,
        name: "Apple iphone",
    },
    {
        id: 2,
        name: "Apple Macbook",
    },
    {
        id: 3,
        name: "Apple Ipad",
    },
    {
        id: 4,
        name: "Dell Alienware laptop",
    },

]

const jsonProducts = JSON.stringify(products);

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.end("<h1>I am the home page</h1>")
    }
    else if (req.url === '/products') {
        res.end(jsonProducts)
    }
    else if (req.url === '/products/?slug') {
        console.log(req)
    }
})


server.listen(3000, () => {
    console.log("The server is running in port 3000");
})


