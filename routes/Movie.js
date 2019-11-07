const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")

Router.get("/movie", (req,res) => {
    mysqlConnection.query("SELECT * from movie", (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })
})

Router.post('/addmovie' , (req, res) => {

    var movie_name = req.body.movie_name;
    var movie_description = req.body.movie_description;
    var movie_url = req.body.movie_url;
    var movie_release_date = req.body.movie_release_date;
    var watched = req.body.watched;

    let sql = "insert into movie(movie_name, movie_description, movie_url, movie_release_date, watched) values "
    + " (?, ?, ?, ?, ?) ";
    
    mysqlConnection.query(sql, [movie_name, movie_description, movie_url, movie_release_date, watched], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});

Router.post('/deletemovie' , (req, res) => {

    var movie_name = req.body.movie_name;
    let sql = "delete from movie where movie_name = ? ";
    
    mysqlConnection.query(sql, [movie_name], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});

Router.post('/editmovie' , (req, res) => {

    var watched = req.body.watched;
    var movie_name = req.body.movie_name;
    let sql = "update movie set watched = ? where movie_name = ? ";
    
    mysqlConnection.query(sql, [watched, movie_name], (err, row, fields)=>{
        if(!err){
            res.send(row)
        }
        else{
            res.send(err)
        }
    })

});


module.exports = Router;