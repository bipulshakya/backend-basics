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
    if(!book) {
        return res.status(404).json({
            error: "Book not found"
        });
    }
    res.status(200).json(book);
});

//PUT /books
//Create a book
router.post("/", (req, res) => {
    const {title , author, year, available } = req.body;
    //Error Handling
    if(!title || !author){
        return res.status(400).json({
            error: "Title and Author is missing"
        });
    }
    books.push(book);
    res.status(201).json(books);
})

module.exports = router;