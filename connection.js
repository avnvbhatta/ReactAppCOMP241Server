require('dotenv').config()

const mysql = require("mysql")

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  }
);

mysqlConnection.connect(err => {
  if(!err){
    console.log("connected")
  }
  else{
    console.log("not connected")
    console.log(err)

  }
})

module.exports = mysqlConnection;