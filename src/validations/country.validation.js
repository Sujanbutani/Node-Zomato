const joi = require("joi")

// create country
const createcountry = {
    body : joi.object().keys({
        country_name : joi.string().required().trim(),
        country_language : joi.string().required().trim(),
    }),
};

module.exports = {
    createcountry
}