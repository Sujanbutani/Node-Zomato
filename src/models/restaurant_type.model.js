const mongoose = require("mongoose");

const restaurant_typeSchema = new mongoose.Schema(
    {
        restaurant_Type: {
            type: String,
            trim: true,
        },
        restaurant_Type_desc: {
            type: String,
            trim: true,
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

const restaurant_type = mongoose.model("restaurant_type", restaurant_typeSchema);

module.exports = restaurant_type;