const Product = require("../models/product.model");

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json({ data: products });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get product by id
exports.getProductById = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id).exec();
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.json({ data: product });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get products by pagination
exports.getProducts = async (req, res) => {
  try {
    const { page } = req.query;
    const limit = 10;
    const products = await Product.find()
      .skip(page * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    const count = await Product.countDocuments();
    res.json({
      data: products,
      currentPage: page,
      numberOfPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// create or update product
exports.createOrUpdateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id).exec();
    if (!product) {
      const newProduct = new Product(req.body.product);
      await newProduct.save();
      res.json({ data: newProduct, message: "Product created successfully" });
    } else {
      await Product.findByIdAndUpdate(_id, req.body.product, {
        new: true,
      }).exec();
      res.json({ message: "Product updated successfully" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findByIdAndDelete(_id).exec();
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete Many products
exports.deleteManyProducts = async (req, res) => {
  try {
    const { ids } = req.params;
    const products = await Product.deleteMany({ ids });
    if (!products) {
      return res.status(400).json({ message: "Products not found" });
    }
    res.json({ message: "Products deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// filter products by category
exports.filterProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category }).exec();
    if (!products) {
      return res.status(400).json({ message: "Products not found" });
    }
    res.json({ data: products });
  } catch (error) {
    res.status(500).send(error);
  }
};
