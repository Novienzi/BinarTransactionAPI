const express = require('express')
const editData = require('../../../controllers/editController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()

app.use(verifyJwt)
app.patch('/admin/vehicles', (req, res) => {
    const body = req.body
    const id = req.query.id
    const result = editData('vehicles', id, body)
    if (result) {

        res.send(result)
    } else {
        // called if request body object key is lacking
        res.status(400).send('Bad request')
    }
})

module.exports = app