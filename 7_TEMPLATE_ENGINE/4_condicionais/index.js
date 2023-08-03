// const express = require('express')
// const exphbs = require('express-handlebars')
import express from 'express';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Tião',
    surname: 'Gavião',
    age: 55
  }
  const opcoes = {
    p1: 'xeriforinfora',
    p2: 'xafundifórnio',
    p3: 'sinforoso'
  }

  res.render('home', { user: user, auth: true})
})

app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

app.listen(3000)