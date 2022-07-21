const router = require("express").Router();
const {
  getProducts,
  getProductById,
  getAllProducts,
  createOrUpdateProduct,
  deleteProduct,
  deleteManyProducts,
} = require("../controllers/product.controller");

router.get("/products-all", getAllProducts);
router.get("/products", getProducts);
router.get("/products/:_id", getProductById);
router.post("/products", createOrUpdateProduct);
router.delete("/products/:_id", deleteProduct);
router.post("/delete-many-products", deleteManyProducts);

module.exports = router;
