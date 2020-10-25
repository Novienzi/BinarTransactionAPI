const express = require('express')
const editData = require('../../../controllers/editController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()

app.use(verifyJwt)
app.get('/admin/vehicles', (req, res) => {
    const result = getData('vehicles', req.query)
    res.send(result)
    // res.status(404).send("DATA NOT FOUND")

})

module.exports = app