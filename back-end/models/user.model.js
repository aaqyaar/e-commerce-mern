const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, minlength: 6, maxlength: 50 },
    role: {
      type: String,
      required: true,
      enum: [process.env.USER_ACCESS_ROLE, process.env.ADMIN_ACCESS_ROLE],
    },
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
