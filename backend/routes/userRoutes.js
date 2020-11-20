import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  adminUpdateUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);
router.get("/:id", protect, admin, getUserById);
router.put("/:id", protect, admin, adminUpdateUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
export default router;
