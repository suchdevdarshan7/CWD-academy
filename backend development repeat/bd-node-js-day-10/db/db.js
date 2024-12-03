const mongoose = require('mongoose')

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/cwd');

    console.log('Mongo db connected successfully!')
}

module.exports = connectDb;