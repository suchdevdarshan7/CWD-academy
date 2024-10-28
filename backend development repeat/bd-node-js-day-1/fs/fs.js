const fs = require('fs')

// let data = fs.readFileSync('./notes.md', 'utf-8');

console.log('This is before the statement')

fs.readFile('./notes.md', 'utf-8', (err, data) => {
    if (err) {
        return err.message;
    }
    console.log(data)
})

console.log('This is after the statement')
console.log("I have succefully completed")