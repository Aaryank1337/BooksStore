import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:1000/api/v1", // Base URL for the backend
});

// Function to get all books
export const getBooks = () => api.get("/getBooks");

// Function to add a new book
export const addBook = (bookData) => api.post("/add", bookData); // No change needed here

// Function to get a book by ID
export const getBookById = (id) => api.get(`/getBooks/${id}`);

// Function to update a book by ID
export const updateBook = (id, bookData) => api.put(`/updateBook/${id}`, bookData);

// Function to delete a book by ID
export const deleteBook = (id) => api.delete(`/deleteBook/${id}`);

// Export the Axios instance as the default export
export default api;
