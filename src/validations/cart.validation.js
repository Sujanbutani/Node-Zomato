const joi = require("joi")

// create city
const createcity = {
    body : joi.object().keys({
        total_item : joi.string().required().trim(),
        total_price : joi.string().required().trim(),
        coupon_num : joi.string().required().trim(),
        user : joi.string().required().trim(),
        food : joi.string().required().trim()
    }),
};

module.exports = {
    createcity
}