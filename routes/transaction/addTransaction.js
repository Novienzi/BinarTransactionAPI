
const express = require('express')
const app = express.Router()
const { verifyJwt } = require('../../middlewares/jwtMiddleware')
const addData = require('../../controllers/addController')

app.post('/transaction', verifyJwt, function (req, res) {
    const body = req.body
    const result = addData('transaction', body)
    if (result) {
        res.send(result)
    } else {
        res.status(400).send('wrong body')
    }

})

module.exports = app
