const mongoose = require('mongoose');

// 1. Creo el esquema del modelo
const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true
  },
  bookCategory: {
    type: String,
    required: true
  },
  bookPrice: {
    type: String,
    required: true
  },
  noAvailable: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  upc: {
    type: String,
    required: true
  }
});
// 2. Creo el modelo y lo exporto
const User = mongoose.model('Book', bookSchema);
module.exports = User;