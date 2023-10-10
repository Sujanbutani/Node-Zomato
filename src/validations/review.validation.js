const joi = require("joi")

// create review
const createreview = {
    body : joi.object().keys({
        user : joi.string().required().trim(),
        restaurant : joi.string().required().trim(),
        rating : joi.number().integer().required(),
        comment : joi.string().required().trim(),
    }),
};

module.exports = {
    createreview
}