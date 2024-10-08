const fs = require('fs')

// fs.writeFileSync('./test.txt', "Hi this is the file to be written by darshan", "utf-8")


// fs.writeFile('./code.txt', "Hi I am written by darshan in node js day 2", "utf-8", (err) => {
//     if (err) {
//         console.log('Error occured')
//         return;
//     }
//     console.log('Data written successfully')
// })



// fs.mkdir('./tester', () => {
//     console.log('working')
// })

// fs.rmdir('./tester', () => {
//     console.log('Succesfully deleted the directory')
// })


fs.readFile('./code.txt', 'utf-8', (err, data) => {
    fs.writeFile('./test.txt', data, 'utf-8', (err, data) => {
        if (err) {
            console.log('error has occured')
            return;
        }
        console.log('Data written succesfully!')

        fs.readFile('./test.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log('An error occured!')
                return;
            }
            console.log(data)
        })
    })
})