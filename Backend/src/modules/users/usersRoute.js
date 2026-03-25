import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "./usersController.js";

import { authMiddleware } from "../../middleware/authmiddleware.js";
import { checkPermission } from "../../middleware/permissionMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, checkPermission("dashboard"), createUser);
router.get("/", authMiddleware, checkPermission("dashboard"), getUsers);
router.put("/:id", authMiddleware, checkPermission("dashboard"), updateUser);
router.delete("/:id", authMiddleware, checkPermission("dashboard"), deleteUser);

export default router;