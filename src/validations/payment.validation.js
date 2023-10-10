const joi = require("joi")

// create payment
const createpayment = {
    body : joi.object().keys({
        payment_method : joi.string().required().trim(),
        card_number : joi.number().integer().required(),
        amount : joi.number().integer().required(),
        user : joi.string().required().trim(),
        order : joi.string().required().trim(),

    }),
};

module.exports = {
    createpayment
}