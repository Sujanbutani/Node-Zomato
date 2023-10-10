const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country_name: {
      type: String,
      trim: true,
    },
    country_language: {
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

const country = mongoose.model("country", countrySchema);

module.exports = country;