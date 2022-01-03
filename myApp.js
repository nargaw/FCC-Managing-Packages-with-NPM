var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()
var bodyParser = require('body-parser')


bGround.log("Hello World")
console.log("Hello World")

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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


app.get("/now", (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.send({"time": req.time})
    console.log({"time": req.time})
})

app.get("/:word/echo", (req, res) =>{
    res.json({ "echo": req.params.word})
    //console.log(req.params)
})

app.get("/name", (req, res) =>{
    res.json({ name: req.query.first + " " + req.query.last})
})

app.post("/name", (req, res) => {
    res.json({ name: req.body.first + " " + req.body.last})
})
























 module.exports = app;
