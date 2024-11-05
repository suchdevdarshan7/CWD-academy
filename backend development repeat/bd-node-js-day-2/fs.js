
const fs = require('node:fs/promises')


// const fs = require('fs')

// fs.readFile('./output.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err.message)
//         return ;
//     }
//     console.log(data)

// })


async function GetText() {
    try {
        const data = await fs.readFile('./output.txt', 'utf-8');
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}

GetText()


// async function readTheGivenFile() {
//     const data = await fs.readFile('./output.txt', 'utf-8');
//     console.log(data)
// }


// readTheGivenFile()


// console.log(fs)
// read write append unlink mkdir rmdir
// let data = "This is just for testing"

// fs.writeFile('./sample.txt', data, 'utf-8', (err) => {
//     fs.readFile('./test.txt', 'utf-8', (err, data2) => {
//         fs.writeFile('./output.txt', `${data} ${data2}`, 'utf-8', (err, data) => {
//             console.log('File written succesfully')
//         })
//     })
// })



