const mongoose = require("mongoose");
const config=require("../config/config")

const foodSchema = new mongoose.Schema(
    {
        food_name: {
            type: String,
            trim: true
        },
        food_desc: {
            type: String,
            trim: true
        },
        food_image: {
            type: String,
            trim: true
        },
        Restaurant: {
          type: mongoose.Types.ObjectId,
          ref: "Restaurant",
      },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.food_image) {
                data.food_image = `${config.base_url}banner_images/${data.food_image}`;
              }
            },
          },
    }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;