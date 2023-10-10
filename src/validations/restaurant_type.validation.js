const joi = require("joi")

// create restaurant_type
const createrestaurant_type = {
    body : joi.object().keys({
        restaurant_Type : joi.string().required().trim(),
        restaurant_Type_desc : joi.string().required().trim(),
    }),
};

module.exports = {
    createrestaurant_type
}