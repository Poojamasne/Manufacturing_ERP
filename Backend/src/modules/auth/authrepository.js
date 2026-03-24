import { db } from "../../config/db.js";

export const findUserByEmail = async (email) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT users.*, roles.name as role
       FROM users
       JOIN roles ON users.role_id = roles.id
       WHERE email = ?`,
      [email]
    );

    return rows[0];
  } catch (error) {
    throw new Error("Database error");
  }
};