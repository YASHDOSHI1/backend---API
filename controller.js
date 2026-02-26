// PRODUCTS
exports.getAllProducts = (req, res) => {
  res.json({ message: "Get all products" });
};

exports.createProduct = (req, res) => {
  res.json({ message: "Product created", data: req.body });
};

exports.updateProduct = (req, res) => {
  res.json({ message: "Product updated", id: req.params.id });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: "Product deleted", id: req.params.id });
};

// USERS
exports.getAllUsers = (req, res) => {
  res.json({ message: "Get all users" });
};

exports.createUser = (req, res) => {
  res.json({ message: "User created", data: req.body });
};

exports.updateUser = (req, res) => {
  res.json({ message: "User updated", id: req.params.id });
};

exports.deleteUser = (req, res) => {
  res.json({ message: "User deleted", id: req.params.id });
};

// CART
exports.getAllCart = (req, res) => {
  res.json({ message: "Get all cart items" });
};

exports.createCartItem = (req, res) => {
  res.json({ message: "Cart item added", data: req.body });
};

exports.updateCartItem = (req, res) => {
  res.json({ message: "Cart item updated", id: req.params.id });
};

exports.deleteCartItem = (req, res) => {
  res.json({ message: "Cart item deleted", id: req.params.id });
};

// ORDERS
exports.getAllOrders = (req, res) => {
  res.json({ message: "Get all orders" });
};

exports.createOrder = (req, res) => {
  res.json({ message: "Order created", data: req.body });
};

exports.updateOrder = (req, res) => {
  res.json({ message: "Order updated", id: req.params.id });
};

exports.deleteOrder = (req, res) => {
  res.json({ message: "Order deleted", id: req.params.id });
};
