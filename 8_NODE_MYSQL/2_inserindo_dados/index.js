
import express from 'express';
import { engine } from 'express-handlebars';
// const mysql = require('mysql');
import mysql from 'mysql'

const app = express()


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true,
    }),
    )
    
process.on('uncaughtException', function (err) {
    console.log(err);
});

app.use(express.json())
app.get("/", function (req, res) {
    res.render("home");
})

app.post('/books/insertbook', function (req, res) {
    const title = req.body.title
    const pageqty = req.body.pageqty
  
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`
  
    conn.query(sql, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mucura$Bob#Tia0',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    } else {

        console.log('Conectou ao MySQL')
        app.listen(3000);
    }

})
