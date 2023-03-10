const dotenv = require("dotenv");

dotenv.config()

const environmentVariables = {
    port: process.env.port,
    apikey: process.env.APIkey
}

module.exports = environmentVariables