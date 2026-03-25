import { db } from "../../config/db.js";

export const findUserByEmail = async (email) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        users.id,
        users.name,
        users.email,
        users.password,
        users.role_id,
        roles.role_name as role
     FROM users
     JOIN roles ON users.role_id = roles.id
     WHERE users.email = ?`,
      [email]
    );

    return rows[0];
  } catch (error) {
    console.log(error)
    throw new Error("Database error");
  }
};