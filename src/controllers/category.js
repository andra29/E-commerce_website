class categoryController {
  constructor(productModel) {
    this.products = productModel;
  }
  getCategories(done) {
    this.products.distinct('category', done);
  }
}

module.exports = categoryController;