const express = require('express')
const getData = require('../../controllers/getController')
const { signJwt } = require('../../middlewares/jwtMiddleware')

const app = express.Router()

app.post('/auth/login', (req, res) => {
  const body = req.body
  const result = getData('user', body)
  // result[0] = ambil value dar array index 0
  if (result[0]) {
    const token = signJwt(result[0])
    result[0].accessToken = token
    res.send(result)
  } else {
    res.status(400).send('Bad request')
  }
})

module.exports = app