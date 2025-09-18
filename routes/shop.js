const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const path = require("path");
const router1 = express.Router();

router1.get("/", (req, res, next) => {
  //   res.send("<h1>This is Home</h1>");
  //   console.log("THis is home");
  console.log(adminData.products);

  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router1;
