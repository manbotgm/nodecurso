import express from 'express';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get("/", function (req, res) {
  const user = {
    name: "Matheus",
    surname: "Battisti",
  };

  res.render("home", { user: user, auth: true });
});

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

  res.render("blogpost", { post });
});

app.get("/blog", function (req, res) {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Node.js",
      body: "Node.js é muito utilizado na programação hoje em dia",
      comments: 4,
    },
    {
      title: "PHP ainda vale a pena?",
      category: "PHP",
      body: "",
      comments: 12,
    },
    {
      title: "Os segredos de JavaScript",
      category: "JavaScript",
      body: "",
      comments: 5,
    },
  ];

  res.render("blog", { posts });
});


app.get("/livros", (req, res) => {
  const books = [
    {
      title: "A menina da setima lua",
      category: "Ficção",
      author: "Moony Witcher",
      year: 2004,
    },
    {
      title: "O Príncipe",
      category: "Filosofia",
      author: "Nicolau Maquiavel",
      year: 2014,
    },
    {
      title: "As Crônicas de Cecilia Amarela",
      category: "Ficção",
      author: "Sebastião Corrêa",
      year: 2022,
    },
  ];

  res.render("livros", { books: books });
});



app.listen(3000);