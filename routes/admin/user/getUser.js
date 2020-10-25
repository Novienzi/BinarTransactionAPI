const express = require("express");
const getData = require("../../../controllers/getController");
const { verifyJwt } = require("../../../middlewares/jwtMiddleware");

const app = express.Router();

app.get("/admin/user", verifyJwt, (req, res) => {
    const user = getData("user", query);
    if(user){
        res.status(200).send(user)
    }else{
        res.status(400).send("Not Found")
    }
});
