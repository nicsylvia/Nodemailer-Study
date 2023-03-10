const express = require("express");

const cors = require("cors");

const port = environmentVariables.port

const environmentVariables = require("./Config/secret");

const { DBconnection, agenda } = require("./Config/DB");

const app = express();

DBconnection()
agenda()


app.use(express.json())
app.use(cors())

app.listen(port, () =>{
    console.log("")
    console.log("Server is up and running")
})