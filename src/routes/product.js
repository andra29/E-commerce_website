const Router = require('express').Router;
const ProductController = require('../controllers/product');
let productModel = require('../model/product');
var productRoutes = new Router();

// injecting the model in the controller instance
var productControllerIns = new ProductController(productModel);

productRoutes.get('/', (req, res) => {
  productControllerIns.getProducts((err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

productRoutes.post('/', (req, res) => {
  productControllerIns.addProduct(req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.status(201).end();
  });
});

productRoutes.delete('/:id', (req, res) => {
  productControllerIns.deleteProduct(req.params.isbn, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.status(204).end();
  });
});

module.exports = productRoutes;