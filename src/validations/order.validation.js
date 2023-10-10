const joi = require("joi")

// create order
const createorder = {
    body : joi.object().keys({
        total_price : joi.string().required().trim(),
        payment_method : joi.string().required().trim(),
        user : joi.string().required().trim(),
        restaurant : joi.string().required().trim(),
        food : joi.string().required().trim(),

    }),
};

module.exports = {
    createorder
}