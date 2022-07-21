const User = require("../models/user.model");
const { JWT } = require("../config/JWT");

// login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body.user;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user && (await user.matchPassword(password))) {
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
      res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
// register user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body.user;
    const user = await User.findOne({ email }).exec();
    // console.log(user);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // const hashedPassword = user.encryptPassword(password);
    const newUser = await new User({
      name,
      email,
      role,
      password,
      // : hashedPassword,
    }).save();
    const token = JWT.sign({ _id: newUser._id }, process.env.JWT_SECRET_KEY);
    res.json({
      user: { name: newUser.name, email: newUser.email, role: newUser.role },
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.logout = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      JWT.verify(authorization, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        return res.json({ message: "Logged out successfully" });
      });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send(error);
  }
};
// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json({ users });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
