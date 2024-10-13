import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb+srv://2022aaryankalbhor:pass123@book.hvy8q.mongodb.net/Book?retryWrites=true&w=majority&appName=Book")
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

export { connectDB };