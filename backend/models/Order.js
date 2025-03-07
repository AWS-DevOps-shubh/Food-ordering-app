const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{ item: String, quantity: Number, price: Number }],
    total: { type: Number, required: true },
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Order", OrderSchema);
