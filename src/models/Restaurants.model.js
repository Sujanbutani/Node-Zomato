const mongoose = require("mongoose");
const config=require("../config/config")

const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            trim: true
        },
        restaurant_address: {
            type: String,
            trim: true
        },
        restaurant_contact_no: {
            type: String,
            trim: true
        },
        owner_name: {
            type: String,
            trim: true
        },
        owner_contact_no: {
            type: String,
            trim: true
        },
        Restaurant_image:{
            type: String,
            trim : true,
          },
        whatsapp_notification: {
            type: Boolean,
            default: true
        },
        email: {
            type: String,
            trim: true
        },
        Restaurant_type:{
            type: mongoose.Types.ObjectId,
            ref: "restaurant_type",
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
              if (data?.Restaurant_image) {
                data.Restaurant_image = `${config.base_url}banner_images/${data.Restaurant_image}`;
              }
            },
          },
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;