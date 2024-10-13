import express from "express";
import booksModel from "../models/booksModel.js"; // Ensure the file extension (.js) is included

const router = express.Router();

// Middleware to parse JSON requests
router.use(express.json());

// POST REQUEST - Add a new book
router.post("/add", async (req, res) => {
  try {
    const data = {
      bookname: req.body.bookname,
      author: req.body.author,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image, // Expect the full URL to the image
    };

    const newBook = new booksModel(data);
    await newBook.save();
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    console.log("Error while adding book:", error.message); // Log specific error
    res.status(500).json({ message: "Failed to add book", error: error.message }); // Return error details
  }
});

// FETCH REQUEST - Get all books
router.get("/getBooks", async (req, res) => {
  try {
    const books = await booksModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log("Error fetching books:", error.message); // Log specific error
    res.status(500).json({ message: "Failed to fetch books", error: error.message }); // Return error details
  }
});

// FETCH REQUEST by id - Get a book by ID
router.get("/getBooks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await booksModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    console.log("Error fetching book:", error.message); // Log specific error
    res.status(500).json({ message: "Failed to fetch book", error: error.message }); // Return error details
  }
});

// UPDATE BOOK
router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, author, description, price, image } = req.body;

  try {
    const updatedBook = await booksModel.findByIdAndUpdate(
      id,
      { bookname, author, description, price, image },
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    console.log("Error updating book:", error.message); // Log specific error
    res.status(500).json({ message: "Failed to update book", error: error.message }); // Return error details
  }
});

// DELETE BOOK
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBook = await booksModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Delete successful" });
  } catch (error) {
    console.log("Error deleting book:", error.message); // Log specific error
    res.status(500).json({ message: "Delete unsuccessful", error: error.message }); // Return error details
  }
});

export default router;
