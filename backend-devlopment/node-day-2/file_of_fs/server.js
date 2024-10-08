const fs = require('fs/promises')

// let data = fs.readFile('./code.txt', 'utf-8').then((data) => {
//     console.log(data)
// })

async function read() {
    let data = await fs.readFile('./code.txt', 'utf-8')
    console.log(`The data which was written is ${data}`)
}
read()

// console.log(data)