const express = require('express')
const editData = require('../../../controllers/editController')
const getData = require('../../../controllers/getController')
const app = express.Router()
// uid is a id generator library
// Reference: https://www.npmjs.com/package/uid
//const uid = require('uid')

app.patch('/admin/vehicles', (req, res) => {
    const body = req.body
    const id = req.query.id
    // const isVehiclesExist = getData('vehicles', body)
    // db.edit('transaction', id, body)
    // res.send('datanya udah di update mas')
    // if (isVehiclesExist) {
    // body.id = uid()
    const result = editData('vehicles', id, body)
    if (result) {
        res.send(result)
    } else {
        // called if request body object key is lacking
        res.status(400).send('Bad request')
    }
    // } else {
    //     // called if vehicle is already exists
    //     res.status(409).send(`Vehicles doesn't exist!`)
    // }
})

module.exports = app