const mongoose = require("mongoose");

const Agenda = require("agenda")

const DB_URL = "mongodb://localhost/NodemailerStudy";

const DBconnection = async() =>{
    try {
        const con = await mongoose.connect(DB_URL)
        console.log(`Database is connnected to server on ${con}`)
    } catch (error) {
        console.log(`Could not connect to DB because ${error}`)
    }
}

const agenda = new Agenda({
    db: { address: DB_URL, collection: "Agenda" }
})

module.exports = {DBconnection, agenda }