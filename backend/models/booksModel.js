import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
bookname: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const booksModel = mongoose.model("books", bookSchema);
export default booksModel;
