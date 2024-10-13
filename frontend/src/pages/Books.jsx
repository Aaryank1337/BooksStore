import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../utils/api"; // Adjust the import path as necessary
import Book from "../components/Book"; // Adjust the import path as necessary
import './styling/Books.css'; // Import CSS for styling

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data.books);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book._id !== id)); // Update local state
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <div className="container">
      <h1>Books List</h1>
      {books.length > 0 ? (
        <div className="books-grid">
          {books.map((book) => (
            <Book key={book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default Books;
