var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()


bGround.log("Hello World")
console.log("Hello World")

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

app.use('/public', express.static(__dirname + "/public"))

// app.get('/json', (req, res) =>{
//     res.json(
//         {"message": "Hello json"}
//     )
// })

app.get('/json', (req, res) => {
    var jsonResponse = {"message": "Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase"){
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }
    res.json(jsonResponse) 
})



























 module.exports = app;
