const express = require('express')
const addData = require('../../../controllers/addController')
const getData = require('../../../controllers/getController')
const app = express.Router()
// uid is a id generator library
// Reference: https://www.npmjs.com/package/uid
//const uid = require('uid')
app.post('/admin/vehicles', (req, res) => {
    const body = req.body
    // const isUserVehicles = getData('vehicles', body)
    // // if (!isUserVehicles) {
    // body.id = uid()
    const result = addData('vehicles', body)
    if (result) {
        res.send(result)
    } else {
        // called if request body object key is lacking
        res.status(400).send('Bad request')
    }
    // } else {
    //     // called if vehicle is already exists
    //     res.status(409).send('Vehicles exist!')
    // }
})

module.exports = app