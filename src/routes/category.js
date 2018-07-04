const Router = require('express').Router;
const categoryController = require('../controllers/category');
let productModel = require('../model/product');
var categoryRoutes = new Router();

// injecting the category model in the category instance
var categoryControllerIns = new categoryController(productModel);

categoryRoutes.get('/', (req, res) => {
  categoryControllerIns.getCategories((err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);    
  });
});

module.exports = categoryRoutes;