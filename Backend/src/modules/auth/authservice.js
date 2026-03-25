import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import * as authRepository from "./authrepository.js";

export const login = async ({ email, password }) => {
  const user = await authRepository.findUserByEmail(email);

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

const token = jwt.sign(
  {
    userId: user.id,
    roleId: user.role_id
  },
  env.jwtSecret,
  { expiresIn: "1d" }
);
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};