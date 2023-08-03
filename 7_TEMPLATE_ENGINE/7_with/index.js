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
  
  res.render('home', { user: user, auth: true })
})

app.get("/dashboard", function (req, res) {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items: items });
});

app.get("/post", function (req, res) {
  const post = {
    title: "Aprender Node.js",
    category: "Node.js",
    body: "Node.js é muito utilizado na programação hoje em dia",
    comments: 4,
  };

  res.render("blogpost", { post }); //renderizando uma view chamada blogpost
});

app.listen(3000)