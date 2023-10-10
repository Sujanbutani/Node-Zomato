const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
    },
    rating: {
        type : Number,
        trim : true
    },
    comment: {
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

const review = mongoose.model("review", reviewSchema);

module.exports = review;