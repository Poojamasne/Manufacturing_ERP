export const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Access Denied: You do not have permission",
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        message: "Role authorization error",
      });
    }
  };
};