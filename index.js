const express = require('express')
const app = express()
const { rout }=require("./func/rout")
const ejs=require("ejs")


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
rout(app)



app.listen(3000)