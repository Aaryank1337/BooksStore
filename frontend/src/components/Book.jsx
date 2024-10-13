import React from 'react';

const Book = ({ book, onDelete }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.bookname} className="book-image" />
      <h5>{book.bookname}</h5>
      <p>by {book.author}</p>
      <p>${book.price}</p>
      <button onClick={() => onDelete(book._id)} className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Book;
