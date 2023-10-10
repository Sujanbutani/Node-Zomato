const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
    {
        vehical_number: {
            type: String,
            trim: true,
        },
        license_number: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "city",
        },
        state: {
            type: mongoose.Types.ObjectId,
            ref: "state",
        },
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
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

const delivery = mongoose.model("delivery", deliverySchema);

module.exports = delivery;