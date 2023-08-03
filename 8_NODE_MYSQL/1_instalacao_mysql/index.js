import express from 'express';
import { engine } from 'express-handlebars';
// const mysql = require('mysql');
import mysql from 'mysql'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get("/", function (req, res) {
    res.render("home");
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    }
    console.log('Conectou ao MySQL')

    app.listen(3000);
})
