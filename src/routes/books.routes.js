const express = require("express");
const books = require("../data/books");

const router = express.Router();

//GET /books
//Returns All Books
router.get("/", (req, res) => {
  res.status(200).json(books);
});

// GET /books/:id
// Return One books
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);
  if (!book) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  res.status(200).json(book);
});

//POST /books
//Create a book
router.post("/", (req, res) => {
  const { title, author, year, available } = req.body;
  //Error Handling
  if (!title || !author) {
    return res.status(400).json({
      error: "Title and Author is missing",
    });
  }

  const book = {
    id: books.length + 1,
    title,
    author,
    year: year || null,
    available: typeof available === "boolean" ? available : true,
  };

  books.push(book);
  res.status(201).json(books);
});

//PUT /books/:id
//Update book
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      error: "Book not found",
    });
  }

  const { title, author, year, available } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      error: "Title and author are required",
    });
  }

  book.title = title;
  book.author = author;
  book.year = year || null;
  book.available = typeof available === "boolean" ? available : book.available;

  res.status(200).json(book);
});

// DELETE /books/:id
// Delete a book
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json(deletedBook);
});

module.exports = router;
