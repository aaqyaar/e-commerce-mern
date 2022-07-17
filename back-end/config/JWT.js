const jwt = require("jsonwebtoken");

exports.JWT = {
  sign: (payload, secret) => {
    return jwt.sign(payload, secret, { expiresIn: "10d" });
  },
  verify: (token, secret) => {
    return jwt.verify(token, secret);
  },
  decode: (token) => {
    return jwt.decode(token);
  },
};
