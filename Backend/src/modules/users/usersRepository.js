import { db } from "../../config/db.js";

export const getRoleIdByName = async (roleName) => {
  const [rows] = await db.promise().query(
    "SELECT id FROM roles WHERE role_name = ?",
    [roleName]
  );

  if (rows.length === 0) {
    throw new Error("Role not found");
  }

  return rows[0].id;
};

export const createUser = async (data) => {
  const roleId = await getRoleIdByName(data.role);

  const [result] = await db.promise().query(
    "INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)",
    [data.name, data.email, data.password, roleId]
  );
    console.log("Insert ID:", result.insertId); // add this

  return result.insertId;
};

export const getUsers = async () => {
  const [rows] = await db.promise().query(
    `SELECT 
        users.id,
        users.name,
        users.email,
        roles.role_name as role
     FROM users
     LEFT JOIN roles ON users.role_id = roles.id`
  );
  return rows;
};

export const updateUser = async (id, data) => {
  const roleId = await getRoleIdByName(data.role);

  const [result] = await db.promise().query(
    "UPDATE users SET name=?, email=?, role_id=? WHERE id=?",
    [data.name, data.email, roleId, id]
  );
  return result;
};

export const deleteUser = async (id) => {
  const [result] = await db.promise().query(
    "DELETE FROM users WHERE id=?",
    [id]
  );
  return result;
};