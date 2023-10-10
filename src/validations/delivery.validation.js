const joi = require("joi")

// create delivery
const createdelivery = {
    body : joi.object().keys({
        vehical_number : joi.string().required().trim(),
        license_number : joi.string().required().trim(),
        address : joi.string().required().trim(),
        city : joi.string().required().trim(),
        state : joi.string().required().trim(),
        country : joi.string().required().trim(),
    }),
};

module.exports = {
    createdelivery
}