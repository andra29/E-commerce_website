const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: Number
  });
  
// create model
const product = mongoose.model('product', productSchema);

// export the model
module.exports = product;