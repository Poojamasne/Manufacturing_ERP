import * as authService from "./authservice.js";

export const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};