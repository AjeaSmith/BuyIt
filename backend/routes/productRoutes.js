import express from "express";
const router = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createReview,
} from "../controllers/productController.js";

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/:id/reviews", protect, createReview);
// ADMIN ROUTES
router.post("/", protect, admin, createProduct);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);

export default router;
