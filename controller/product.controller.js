const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Cannot find the ID",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = req.body;
    const product = await Product.findByIdAndUpdate(id, updateProduct);
    if (!product) {
      return res.status(404).json("msg: cannot find the product");
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Cannot find the ID",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findByIdAndDelete(id);
    res.status(200).json("Prodduct deleted Successfully");
  } catch (error) {
    res.status(500).json({
      message: "Cannot find the ID",
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
