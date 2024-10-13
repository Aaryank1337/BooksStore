import express from "express";
import { connectDB } from "./connection/conn.js";
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json()); // Add parentheses to call the method
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
connectDB();

app.use("/api/v1", bookRoute);
