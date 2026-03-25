import { db } from "../config/db.js";

export const checkPermission = (permissionName) => {
  return async (req, res, next) => {
    try {
      const roleId = req.user.roleId;

      const [rows] = await db.promise().query(
        `SELECT p.permission_name
         FROM role_permissions rp
         JOIN permissions p ON rp.permission_id = p.id
         WHERE rp.role_id = ? AND p.permission_name = ?`,
        [roleId, permissionName]
      );

      if (rows.length === 0) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};