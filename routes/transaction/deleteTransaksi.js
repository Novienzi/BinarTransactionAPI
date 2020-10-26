// const express = require("express");
// const app = express.Router();
// const db = require("../../controllers/removeController");
// const authentication = require("../../middlewares/jwtMiddleware");

// app.use(authentication);

// app.delete("/transaksi", (req, res) => {
//   let id = req.query;
//   const idIsAvailable = db.get("transaksi", id);

//   if (!idIsAvailable) {
//     res.status(400).send("You must enter a valid ID");
//   } else {
//     db.remove("transaksi", id);
//     res.send("your ID has succesfully deleted");
//   }
//   return;
// });

// module.exports = app;
