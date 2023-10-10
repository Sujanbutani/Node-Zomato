const { number } = require("joi");
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        payment_method: {
            type: String,
            trim: true,
        },
        card_number: {
            type: Number,
            trim: true,
        },
        amount: {
            type: Number,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order",
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

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;