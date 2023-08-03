const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.post('/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)
})

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/rota.html`)
})

module.exports = router