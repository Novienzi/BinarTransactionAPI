const express = require('express')
const app = express.Router()
const getData = require('../../controllers/getController')
const { verifyJwt } = require('../../middlewares/jwtMiddleware')


app.use(verifyJwt)
app.get('/vehicles', (req, res) => {
    const result = getData('vehicles', req.query)
    res.send(result)
})

module.exports = app