// const express = require("express");
// const app = express.Router();
// const db = require("../../controllers/editController");
// const authentication = require("../../middlewares/jwtMiddleware");

// app.use(authentication);

// app.patch("/transaksi", (req, res) => {
//   const body = req.body;
//   const id = req.query.id;

//   const result = db.edit("transaksi", id, body);
//   if (result) {
//     res.send(result);
//   } else {
//     res.status(404).send("stop");
//   }
// });

// module.exports = app;
