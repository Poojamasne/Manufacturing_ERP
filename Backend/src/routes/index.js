import express from "express";
import authRoutes from "../modules/auth/authroute.js";
const router = express.Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.send("ERP API Running");
});

export default router;