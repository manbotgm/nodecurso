// const express = require('express')
// const exphbs = require('express-handlebars')
import express from 'express';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('home', { layout: false })
})

app.listen(3000)