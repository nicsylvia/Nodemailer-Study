const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost/NodemailerStudy";

const DBconnection = async() =>{
    try {
        const con = await mongoose.connect(DB_URL)
        console.log(`Database is connnected to server on ${con}`)
    } catch (error) {
        console.log(`Could not connect to DB because ${error}`)
    }
}

module.exports = DBconnection