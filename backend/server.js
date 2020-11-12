import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(
    `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});
