//! filesystem module: --> built in modules

//~ synchronous methods and async methods


import fs from 'fs';

let devData = fs.readFileSync('./test.txt', 'utf-8');

console.log(devData)


fs.readFile('./tet.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);

    }
    console.log(data)
})









