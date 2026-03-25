import express from "express";
import authRoutes from "../modules/auth/authroute.js";
import usersRoutes from "../modules/users/usersRoute.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.get("/", (req, res) => {
  res.send("ERP API Running");
});

export default router;