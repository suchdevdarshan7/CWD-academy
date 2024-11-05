
const fs = require('fs')


// fs.writeFileSync('./sample.txt', "This is created for testing purposes only !", "utf-8")


// fs.writeFile('./sample.txt', "This file has been modified intentionally to test", "utf-8", (err) => {

//     if (err) {
//         console.log(err.message)
//         return;
//     }

//     console.log('File written succesfully')
// })

                
fs.mkdir('./Components', (err) => {

    console.log('File created succesfully')
});

