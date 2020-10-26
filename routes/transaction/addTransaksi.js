// const express = require("express");
// const app = express.Router();
// const db = require("../../controllers/addController");
// const authentication = require("../../middlewares/jwtMiddleware");

// app.use(authentication);

// app.post("/transaksi", (req, res) => {
//   const body = req.body;
//   const result = db.add("transaksi", body);
//   if (!result) {
//     res.status(400).send("Wrong body");
//   } else {
//     res.send(result);
//   }
//   return;
// });

// module.exports = app;
