import React, { useState } from "react";
import { addBook } from "../utils/api"; // Adjust the import path as necessary
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    bookname: "",
    author: "",
    description: "",
    price: 0,
    image: "", // Change to string for image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure value from target

    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Update the state with the input value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addBook(bookDetails); // Send JSON object to the API
      toast.success("Book added successfully!"); // Show success toast
      setBookDetails({ bookname: "", author: "", description: "", price: 0, image: "" }); // Reset form
    } catch (error) {
      console.error("Failed to add book:", error);
      toast.error("Failed to add book. Please try again."); // Show error toast
    }
  };

  return (
    <div className="container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bookname" className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="bookname"
            name="bookname"
            value={bookDetails.bookname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={bookDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Book Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={bookDetails.image} // Bind to image URL input
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to your component */}
    </div>
  );
};

export default AddBook;
