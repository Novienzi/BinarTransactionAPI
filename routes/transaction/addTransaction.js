
const express = require('express')
const app = express.Router()
const { verifyJwt } = require('../../middlewares/jwtMiddleware')
const addData = require('../../controllers/addController')
const getData = require('../../controllers/getController')

app.post('/transaction', verifyJwt, function (req, res) {
    // const dataCustomer = getData('customer')
    // const dataAdmin = getData('admin')
    // const dataVehicle = getData('vehicle')
    const body = req.body
    // body.customerId = dataCustomer[0].userId
    // body.adminId = dataAdmin[0].userId
    // body.vehicleId = dataVehicle[0].id
    const result = addData('transaction', body)
    if (result) {
        res.send(result)
    } else {
        res.status(400).send('wrong body')
    }

})

module.exports = app
