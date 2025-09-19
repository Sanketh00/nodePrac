const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.showProducts);

module.exports = router;
