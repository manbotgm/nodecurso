const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const projects = require('./projects')
const rotas = require('./rotas')

app.use(express.static('public'))

app.use('/projects', projects)

app.use('/rotas', rotas)

app.get('/sobre', (req, res) => {
  res.sendFile(`${basePath}/sobre.html`)
})

app.get('/users/:name', (req, res) => {
  console.log(req.params.name)
  res.send('Usuário:' + req.params.name) //exibe o parametro name
})


app.get('/show/:name', (req, res) => {
  console.log(req.params.name)
  res.sendFile(`${basePath}/nome.html`, {name: req.params.name})
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})