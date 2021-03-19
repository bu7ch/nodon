const express = require("express");
const { getBooks, postBook } = require("../controllers/bookController");
const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/new", postBook);


module.exports = bookRouter;