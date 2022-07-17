const { JWT } = require("../config/JWT");

exports.isAuth = async (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
  if (decoded) {
    req.user = decoded;
    next();
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};
