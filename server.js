const express = require("express")
const bodyparser = require("body-parser")
const  MovieRoutes = require("./routes/Movie")
const mysqlConnection = require("./connection")
var app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies


app.use("/", MovieRoutes);



app.listen(3001);