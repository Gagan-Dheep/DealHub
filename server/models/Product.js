const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  img: String,
  Cat: String,
  Title: String,
  price: String,
});

module.exports = mongoose.model('Product', productSchema);
