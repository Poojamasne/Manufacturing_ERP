import mysql from "mysql2";
import { env } from "./env.js";

export const db = mysql.createPool({
  host: env.dbHost,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  
});

// Test database connection
export const connectDB = async () => {
  try {
    const connection = await db.promise().getConnection();
    console.log("MySQL Database Connected");
    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};