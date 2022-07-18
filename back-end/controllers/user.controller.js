const { User } = require("../models/user.model");
const { JWT } = require("../config/JWT");

// login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  if (!user.matchPassword(password)) {
    return res.status(400).json({ message: "Invalid password" });
  }
  const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
  res.json({ user, token });
};
// register user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await User.findOne({ email }).exec();
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = await new User({ name, email, role, password }).save();
  res.json({ user: newUser });
};

exports.updateUser = async (req, res) => {
  const { _id, name, email, password } = req.body;
  const user = await User.findByIdAndUpdate(
    { _id },
    { name, email, password },
    { new: true }
  ).exec();
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.json({ user });
};
// get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

// get user by id
exports.getUserById = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  res.json({ user });
};

// delete user
exports.deleteUser = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findByIdAndDelete(_id);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
};
