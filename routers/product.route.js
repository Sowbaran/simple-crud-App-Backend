const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
router.get("/", productController.getProducts);
router.get("/", productController.createProduct);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
