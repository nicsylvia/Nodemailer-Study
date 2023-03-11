const nodemailer = require("nodemailer");

const SendinblueTransporter = require("nodemailer-sendinblue-transport");

const environmentVariables = require("./secret");

const transporter = nodemailer.createTransport( new SendinblueTransporter({
    apikey: environmentVariables.apikey
}))

module.exports = transporter