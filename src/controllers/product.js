class productController {
  constructor(productModel) {
    this.products = productModel;
  }

  getProducts(done) {
    this.products.find({}, done);
  }

  addProduct(product, done) {
    let productIns = new this.products(product);
    productIns.save(done);
  }

  deleteProduct(id, done) {
    // create the query by searching for the product and remove it
    // then execute the query
    this.products.find({id: id}).remove()
    .exec(done);
  }
}

module.exports = productController;