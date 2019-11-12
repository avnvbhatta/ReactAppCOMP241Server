const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")

//Endpoint to get all todos.
Router.get("/todos", (req,res) => {
    mysqlConnection.query("SELECT * from todo", (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })
})

//Endpoint to insert a todo.
Router.post('/addtodo' , (req, res) => {
    var todo = req.body.todo;
    let sql = "insert into todo (todo, completed) values "
    + " (?, ?) ";
    
    mysqlConnection.query(sql, [todo, 0], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});

//Endpoint to delete a todo.
Router.post('/deletetodo' , (req, res) => {
    var todo = req.body.todo;
    let sql = "delete from todo where todo = ? ";
    mysqlConnection.query(sql, [todo], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});

//Endpoint to edit a todo. Toggles completed bit.
Router.post('/edittodo' , (req, res) => {
    var todo = req.body.todo;
    var completed = req.body.completed;
    let sql = "update todo set completed = ? where todo = ? ";
    
    mysqlConnection.query(sql, [completed, todo], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});


module.exports = Router;