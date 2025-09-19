const adminData = require("../routes/admin");

const Products = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const prods = new Products(req.body.title);
  prods.save();
  res.redirect("/");
};

exports.showProducts = (req, res, next) => {
  const product = Products.fetchAll();
  res.render("shop", {
    prods: product,
    pageTitle: "Shop",
    path: "/",
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
