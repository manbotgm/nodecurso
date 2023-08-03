import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Tião',
    surname: 'Gavião',
    age: 55
  }
  
  res.render('home', { user: user, auth: true})
})

app.get("/dashboard", function (req, res) {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items: items });
});


app.listen(3000)