const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/food-ordering", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connectDB;
