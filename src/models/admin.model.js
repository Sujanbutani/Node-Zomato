const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    admin_name: {
      type: String,
      trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    status:{
        type: String,
        enum: ["delivery", "cancel", "pending"]
    },
    order: {
        type: mongoose.Types.ObjectId,
        ref: "order",
    },
    food: {
        type: mongoose.Types.ObjectId,
        ref: "Food",
    },
    Restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
    },
    state: {
        type: mongoose.Types.ObjectId,
        ref: "state",
    },
    country: {
        type: mongoose.Types.ObjectId,
        ref: "country",
    },
    city: {
        type: mongoose.Types.ObjectId,
        ref: "city",
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

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;