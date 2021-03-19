const Book = require("../models/bookModel");

getBooks = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) console.error(err);
    res.json(books);
  });
};

postBook = (req, res) => {
  addBook = new Book(req.body);
  addBook.save((err,book)=> {
    if (err) {
      console.error(err);
    }
    res.json(book);
  })
}

module.exports = { getBooks, postBook }
