const Router = require('express').Router;

const categoryRoutes = require('./category');
const productRoutes = require('./product');

var mainRouter = new Router();

// mounting the routes on their specific endpoints
mainRouter.use('/category', categoryRoutes);
mainRouter.use('/product', productRoutes);

module.exports = mainRouter;