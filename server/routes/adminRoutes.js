const express = require("express");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

//@route GET/api/admin/users
//@desc Get all users (Admin)
//@access Private/Admin
router.get("/users", protect, isAdmin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route POST /api/admin/users
//@desc Create a new user (Admin)
//@access Private/Admin
router.post("/users", protect, isAdmin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password, role: role || "customer" });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route PUT /api/admin/users
//@desc Update  user info (Admin) - name, email, role
//@access Private/Admin
router.put("/users/:id", protect, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.role = req.body.role || user.role;
    }

    const updatedUser = await user.save();
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route DELETE /api/admin/users/:id
//@desc Delete a user (Admin)
//@access Private/Admin
router.delete("/users/:id", protect, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await User.deleteOne();
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route GET /api/admin/products
//@desc Get all products (Admin)
//@access Private/Admin
router.get("/products", protect, isAdmin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route GET /api/admin/orders
//@desc Get all orders (Admin)
//@access Private/Admin
router.get("/orders", protect, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name  email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route PUT /api/admin/orders/:id
//@desc Update order status (Admin)
//@access Private/Admin
router.put("/orders/:id", protect, isAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();

      res.json({ message: "Order updated successfully", order: updatedOrder });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route DELETE /api/admin/orders/:id
//@desc Delete an order (Admin)
//@access Private/Admin
router.delete("/orders/:id", protect, isAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await Order.deleteOne();
      res.json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
