const express = require('express')
const editData = require('../../../controllers/editController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')
const app = express.Router()

app.use(verifyJwt)
app.patch('/admin/vehicles', (req, res) => {
    const result = editData('vehicles', req.body.id, req.body);
    if (!result) {
        res.status(400).send('Bad request');
    } else {
        res.send(result);
    }
    return;
})

module.exports = app