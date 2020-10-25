const express = require('express')
const addData = require('../../../controllers/addController')
const getData = require('../../../controllers/getController')
const { verifyJwt } = require('../../../middlewares/jwtMiddleware')

const app = express.Router()

app.get('/admin/user', verifyJwt, (req, res) => {
    const body = req.body
    const data = getData('user', body.id)

    if(body && body !== data){
        addData('user', body)
        res.status(200).send("You've added a new user")
    }else{
       res.status(401).send("User already in the database")
    }
})

module.exports = app
