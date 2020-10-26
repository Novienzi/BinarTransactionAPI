
const express = require('express')
const app = express.Router()
const { verifyJwt } = require('../../middlewares/jwtMiddleware')
const getData = require('../../controllers/getController')

app.get('/transaction', verifyJwt, function (req, res) {
    res.send(getData('transaction', req.query))
})

module.exports = app
