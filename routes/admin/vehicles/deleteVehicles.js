const express = require('express')
const editData = require('../../../controllers/editController')
const getData = require('../../../controllers/getController')
const { removeDataById } = require('../../../controllers/removeController')
const remove = require('../../../controllers/removeController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()

app.use(verifyJwt)

app.delete('/admin/vehicles', (req, res) => {
    const result = removeDataById('vehicles', req.query.id)
    if (result) {
        res.send('DATA HAS BEEN DELETED')
    } else {
        res.status(404).send("DATA NOT FOUND")
    }



})

module.exports = app