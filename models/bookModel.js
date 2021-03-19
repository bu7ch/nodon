const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookSchema = new Schema ({
  title: { type: String},
  author: { type: String },
  pages: { type: Number, min: 1 },
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book;