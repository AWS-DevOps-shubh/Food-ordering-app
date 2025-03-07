const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

// Routes
router.post("/", authMiddleware, orderController.createOrder); // Create Order
router.get("/:userId", authMiddleware, orderController.getOrdersByUser); // Get User Orders
router.get("/", authMiddleware, orderController.getAllOrders); // Get All Orders (Admin)
router.put("/:orderId", authMiddleware, orderController.updateOrderStatus); // Update Order Status (Admin)

module.exports = router;
