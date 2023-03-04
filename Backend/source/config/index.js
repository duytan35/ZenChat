
require('dotenv').config()
const mongoose = require('mongoose');

const db_url = process.env.DB_URL;
console.log(db_url);

async function Connect () {
    try {
        await mongoose.connect(db_url)
        console.log("connect successful");
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {Connect};

