import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: "Access denied. Login Again." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden. Admins only." });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token. Login Again." });
  }
};

export default adminAuth;
