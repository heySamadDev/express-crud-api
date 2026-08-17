const products = require("../data/products.js");

const getProducts = (req, res) => {
  return res.status(200).json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json(product);
};

const addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and Price are required!",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  return res.status(201).json({
    message: "Product added successfully!",
    newProduct,
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and Price are required!",
    });
  }

  product.name = name;
  product.price = price;

  return res.status(200).json({
    message: "Product Updated Successfully!",
    product,
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products.splice(index, 1);

  return res.status(200).json({
    message: "Product deleted successfully",
  });
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
