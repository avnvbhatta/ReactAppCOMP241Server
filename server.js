const express = require("express")
const bodyparser = require("body-parser")
const  MovieRoutes = require("./routes/Movie")
const  ToDoRoutes = require("./routes/ToDo")

const mysqlConnection = require("./connection")
var app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies


app.use("/", ToDoRoutes);

//Port to access
app.listen(3001);