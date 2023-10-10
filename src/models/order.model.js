const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        total_price: {
            type: String,
            trim: true,
        },
        payment_method: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant",
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Food",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const order = mongoose.model("order", orderSchema);

module.exports = order;