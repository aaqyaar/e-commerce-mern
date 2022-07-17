const router = require("express").Router();
const {
  login,
  register,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controllers/user.controller");
const { isAuth } = require("../middleware/auth");

router.post("/login", login);
router.post("/register", register);
router.put("/users/:_id", isAuth, updateUser);
router.get("/users", isAuth, getAllUsers);
router.get("/users/:_id", isAuth, getUserById);
router.delete("/users/:_id", isAuth, deleteUser);

module.exports = router;
