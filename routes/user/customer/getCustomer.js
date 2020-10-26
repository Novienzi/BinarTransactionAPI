const express = require('express')
const editData = require('../../../controllers/getController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()

app.get('/user/customers', verifyJwt, (req, res) => {
    const result = getData('customers', req.query)
    res.send(result)

})

module.exports = app