const productService = require("../service/product.js");

async function getAllProducts(req, res) {
  try {
    const rows = await productService.getAllProducts();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error get Products ",
      body: error.message,
    });
  }
}

module.exports = { getAllProducts };
