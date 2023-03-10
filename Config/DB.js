const mongoose = require("mongoose");

const Agenda = require("agenda")

const DB_URL = "mongodb://localhost/NodemailerStudy";

const DBconnection = async() =>{
    try {
        const con = await mongoose.connect(DB_URL)
        console.log("")
        console.log(`Database is connnected to server on ${con.connection.host}`)
    } catch (error) {
        console.log(`Could not connect to DB because ${error}`)
    }
}

const agenda = new Agenda({
    db: { address: DB_URL, collection: "Agenda" }
})

agenda.on("ready", () =>{
    console.log("Agenda is connected to DB")
}).on("error", () =>{
    console.log("An error occured in connecting Agenda")
})

module.exports = {DBconnection, agenda }