const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("olá express")
})

app.listen(port, () => {
    console.log(`ouvindo na porta ${port}.`)
})