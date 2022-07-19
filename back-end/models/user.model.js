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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.encryptPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  const unhashedPassword = await bcrypt.compareSync(
    enteredPassword,
    this.password
  );
  return unhashedPassword;
};

module.exports = mongoose.model("User", userSchema);
