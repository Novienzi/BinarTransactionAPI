const express = require('express')
const addData = require('../../../controllers/addController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()
app.use(verifyJwt)

app.post('/admin/vehicles', (req, res) => {
    const body = req.body
    const result = addData('vehicles', body)
    if (result) {
        res.send(result)
    } else {
        // called if request body object key is lacking
        res.status(400).send('Bad request')
    }
})

module.exports = app