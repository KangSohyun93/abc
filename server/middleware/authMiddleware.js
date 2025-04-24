const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    let token;
  
    if (req.cookies?.token) {
      token = req.cookies.token;
    }
  
    if (!token) return res.status(401).json({ message: "Not authorized" });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch {
      res.status(401).json({ message: "Token invalid" });
    }
};


module.exports = { protect};