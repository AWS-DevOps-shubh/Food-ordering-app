const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, items, total } = req.body;
        const newOrder = new Order({ userId, items, total });
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
};

// Get orders by user ID
exports.getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

// Get all orders (Admin only)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId", "name email");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all orders", error });
    }
};

// Update order status (Admin)
exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.orderId, { status }, { new: true });
        res.status(200).json({ message: "Order status updated", order });
    } catch (error) {
        res.status(500).json({ message: "Error updating order status", error });
    }
};
