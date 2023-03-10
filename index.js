const express = require("express");

const cors = require("cors");
const environmentVariables = require("./Config/secret");
const DBconnection = require("./Config/DB");

const app = express();
DBconnection()

const port = environmentVariables.port

app.use(express.json())
app.use(cors())

app.listen(port, () =>{
    console.log("")
    console.log("Server is up and running")
})