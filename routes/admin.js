const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");
const products = [];

router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Send</button></form>'
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  console.log("THis is add-product");
});

router.post("/add-product", (req, res, next) => {
  // res.(`<h1>${req.body}</h1>`);

  products.push({ title: req.body.product });
  console.log(req.body["product"]);
  res.redirect("/");
});

exports.router = router;
exports.products = products;
