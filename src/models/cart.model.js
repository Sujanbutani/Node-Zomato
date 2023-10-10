const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        total_item: {
            type: String,
            trim: true,
        },
        total_price: {
            type: String,
            trim: true,
        },
        coupon_num: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
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

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;