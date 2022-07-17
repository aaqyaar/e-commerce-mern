const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    avatar: String,
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this.encryptPassword(this.password);
  }
  next();
});

userSchema.methods.encryptPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

userSchema.methods.matchPassword = function (password) {
  return this.password === encryptPassword(password);
};

exports.User = mongoose.model("User", userSchema);
