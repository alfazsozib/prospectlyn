const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return res.status(401).json({ message: "No token provided, please log in." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = authenticateUser;
