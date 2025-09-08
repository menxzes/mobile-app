import express from "express";
import { registerUser, loginUser } from "../services/authService.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const result = await registerUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default router;
