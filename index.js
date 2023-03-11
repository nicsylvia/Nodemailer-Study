const express = require("express");

const cors = require("cors");

const environmentVariables = require("./Config/secret");

const { DBconnection, agenda } = require("./Config/DB");
const { default: router } = require("./Routes/usersRouter");

const port = environmentVariables.port
 
const app = express();

DBconnection()

app.use(express.json())
app.use(cors())

app.use("/api", router)

app.listen(port, () =>{
    console.log("")
    console.log("Server is up and running on port", port)
})