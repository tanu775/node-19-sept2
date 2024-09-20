const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/batch-3`);   //asynchronous function  and it is returning promise
        console.log('database connected');

    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;
